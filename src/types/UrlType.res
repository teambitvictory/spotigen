open Webapi.Dom;
open History;
open Location;

type urlSearchParams;
@bs.new external createUrlSearchParams: 'a => urlSearchParams = "URLSearchParams";

let trimmUrl = () => {
    let url = origin(location)
    Js.log(url)
    replaceState(state(history), "", url, history);
}