# Zeddy Errors
Zeddy Errors is a simple base class for custom errors/exceptions focused on proper TypeScript typings. There are no differences between errors and exception
classes except that errors have by default http status code 500 and exceptions 400.

This library closely follows suggestions written in my upcoming book 'Pragmatic Node.js development: Primer in NestJS'.
In short make descriptive error names so the _error.message_ is not needed, and pass additional data to further enrich the 
error for logging.

### Usage
Make a new file which export error definitions as in sample below. Recommended is to have one SharedErrors and 
one for each part of your application ie. AuthErrors, CacheErrors, UserErrors...

In generic argument you can put the type of data that error will contain.

```javascript
export const SharedErrors = {
  EntityNotFound: class extends ExceptionBase<{ type: string; id: number }> {},
  JwtTokenMissingBearer: class extends ExceptionBase{},
  IntentionalError: class extends ErrorBase<{ reason: string }> {},
};
```
You can throw the errors with:
```javascript
import {SharedErrors} from './app.errors';
//...
throw new SharedErrors.IntentionalError({reason: "Testing errors"});
throw new SharedErrors.JwtTokenMissingBearer();
```
### Example project
Example project can be found on [https://github.com/zveljkovic/zeddy-errors-example](https://github.com/zveljkovic/zeddy-errors-example).
