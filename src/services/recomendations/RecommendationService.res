open UrlType;

type response = {
  tracks: array<SpotifyModel.trackItem>,
}

let mapResponseToItem = (response) => {
  let status = response.Request.status
  if status !== 200 {
    Error(RequestMapper.ResponseError({message: "Failed request with $status"}))
  } else {
    let response = response.Request.response
    switch response {
    | None => Error(RequestMapper.Empty)
    | Some(value) => {
        let tracks = value.tracks->Array.map(ModelMapper.mapSearchTrackToItemTrack)->Array.map(t => Item.Track(t))
        Ok(tracks)
      }
    }
  }
}

let getSeedArtists = (items: array<Item.item>) => {
    items->Array.map(item=> switch item {
    | Item.Artist(_i) => Some(_i.id)
    | _ => None
    })->Array.keep(artist => switch artist {
    | Some(_a) => true
    | None => false
    })->Js.Array2.joinWith(",")
}

let getSeedTracks = (items: array<Item.item>) => {
    items->Array.map(item=> switch item {
    | Item.Track(_i) => Some(_i.id)
    | _ => None
    })->Array.keep(artist => switch artist {
    | Some(_a) => true
    | None => false
    })->Js.Array2.joinWith(",")
}

let getSeedGenres = (items: array<Item.item>) => {
    items->Array.map(item=> switch item {
    | Item.Genre(_i) => Some(_i.id)
    | _ => None
    })->Array.keep(artist => switch artist {
    | Some(_a) => true
    | None => false
    })->Js.Array2.joinWith(",")
}

let generateQueryParam = (items: array<Item.item>) => {
    let queryParam = HashMap.String.fromArray([])
    let seedArtists = getSeedArtists(items)
    if seedArtists->String.length > 0 {
        queryParam->HashMap.String.set("seed_artists", seedArtists)
    }
    let seedTracks = getSeedTracks(items)
    if seedTracks->String.length > 0 {
        queryParam->HashMap.String.set("seed_tracks", seedTracks)
    }
    let seedGenres = getSeedGenres(items)
    if seedGenres->String.length > 0 {
        queryParam->HashMap.String.set("seed_genres", seedGenres)
    }
    queryParam->HashMap.String.toArray->createUrlSearchParams->Js.String2.make
}

let init = (token: string) => {

    let authHeader = Js.Dict.fromArray([("Authorization", "Bearer "++token)])

    (items: array<Item.item>) => {
        let queryParam = generateQueryParam(items)
        Request.make(~url=SpotifyEnv.recommendationUrl ++ queryParam, ~responseType=JsonAsAny: Request.responseType<response>, ~headers=authHeader, ())   
            -> Future.mapError(~propagateCancel=true, RequestMapper.mapError)
            -> Future.mapResult(~propagateCancel=true, mapResponseToItem)
    }
}