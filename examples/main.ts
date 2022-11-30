import { ErrorBase, ExceptionBase} from '../src/zeddy-errors';

export const SharedErrors = {
  EntityNotFound: class extends ExceptionBase<{ type: string; id: number }> {},
  JwtTokenMissingBearer: class extends ExceptionBase{},
  IntentionalError: class extends ErrorBase<{ reason: string }> {},
};

const rand = Math.random();
if (rand > 0.6666)
  throw new SharedErrors.EntityNotFound({type: 'User', id: 111});
else if (rand > 0.3333)
  throw new SharedErrors.JwtTokenMissingBearer();
else
  throw new SharedErrors.IntentionalError({reason: 'Throwing error'});
