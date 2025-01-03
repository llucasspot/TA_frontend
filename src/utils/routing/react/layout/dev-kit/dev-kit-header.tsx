import { DevToolThemeHelper } from '#/utils/routing/react/layout/dev-kit/dev-kit-theme-helper';

export function DevToolHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 p-4 shadow-md z-50">
      <DevToolThemeHelper />
    </header>
  );
}
