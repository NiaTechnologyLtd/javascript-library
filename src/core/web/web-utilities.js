import { ExceptionHelper } from "../exception-helper";
import { Guard } from "../guard";
export class WebUtilities {
    static redirectTo(url) {
        let _url = Guard.safeGet(url, window.location.href).toString();
        console.info("信息：浏览器即将重定向到 “%s”。", _url);
        window.location.href = _url;
    }
    static refresh() {
        WebUtilities.redirectTo();
    }
    static urlEncode(url) {
        ExceptionHelper.argumentNotSupport(url, "url");
        return encodeURI(url);
    }
    static urlDecode(url) {
        ExceptionHelper.argumentNotSupport(url, "url");
        return decodeURI(url);
    }
    static urlEncode2(url) {
        ExceptionHelper.argumentNotSupport(url, "url");
        return encodeURIComponent(url);
    }
    static urlDecode2(url) {
        ExceptionHelper.argumentNotSupport(url, "url");
        return decodeURIComponent(url);
    }
}
