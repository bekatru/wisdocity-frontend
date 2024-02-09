import { useRouteError } from 'react-router-dom';
import { getRouterErrorMessage } from 'modules/routing';

export function ErrorPage() {
  const error = useRouteError();

  const errorMessage: string = getRouterErrorMessage(error)

  return (
    <div id='error-page' className='flex flex-col gap-8 justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}

