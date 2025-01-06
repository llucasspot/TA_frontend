import { HomeHeader } from '#/modules/auth/react/components/home-header.component';
import { GetUserInfoGetter } from '#/modules/auth/use-cases/actions/get-user-info.getter';
import { useGetter } from '#/utils/action/react';

export function HomePage() {
  const { data: userInfo } = useGetter(GetUserInfoGetter);

  console.log(userInfo);

  return (
    <>
      <HomeHeader />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary-500 to-primary-600">
        Home
      </div>
    </>
  );
}
