/**
 * https://developer.mozilla.org/es/docs/Web/HTTP/Status
 */

//... Types of http status code
const EnumHttpStatus = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    NOT_MODIFIED: 304,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    DENIED: 409,
    UNSUPPORTED_MEDIATYPE: 415,
    PRECONDITION_REQUIRED: 428,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503,
};

exports.EnumHttpStatus = EnumHttpStatus;
