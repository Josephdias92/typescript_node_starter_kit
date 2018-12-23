class UserAuth {
    public async basic(req, res, next) {
        /*
        if (!req.headers.authorization) {
            return next(new UnauthorizedException(localeService.translate("missingAuthHeader")));
        } else if (!req.headers.authorization.includes("Basic") || req.headers.authorization.includes("Basic Og==")) {
            return next(new UnauthorizedException(localeService.translate("emptyUser/Password")));
        }
        const base64Credentials = req.headers.authorization.split(" ")[1];
        const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
        const [username, password] = credentials.split(":");
        const result = await endpoint.authorizedApis(username, password);
        if (Utils.isEmptyArray(result)) {
            return next(new UnauthorizedException(localeService.translate("invalidAuthentication")));
        }
        req.authorizedUrls = result;
        */
        next();
    }
    public async authorization(req, res, next) {
        /*
        let url = req.baseUrl + req.route.path;
        if (url) {
            url = url.replace(/\/$/, "");
        }
        const httpMethod = req.method;
        const isAuthorized = req.authorizedUrls.filter((endpointUrls) => {
            return endpointUrls.ENDPOINT_API === url && endpointUrls.HTTPMETHOD === httpMethod;
        });
        if (isAuthorized.length > 0) {
            req.user = isAuthorized[0];
            next();
        } else {
            next(new forbiddenRequestException(localeService.translate("forbiddenRequest")));
        }
        */
       next();
    }
}
export default new UserAuth();
