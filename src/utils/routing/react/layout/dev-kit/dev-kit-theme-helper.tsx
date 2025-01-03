const themes = [
  {
    name: 'default',
  },
  {
    name: 'blue1',
  },
  {
    name: 'orange1',
  },
  {
    name: 'orange2',
  },
  {
    name: 'brown1',
  },
  {
    name: 'brown2',
  },
  {
    name: 'green1',
  },
  {
    name: 'green2',
  },
] as const;

export function DevToolThemeHelper() {
  const onThemeChange = (theme: (typeof themes)[number]) => {
    document.documentElement.setAttribute('data-theme', theme.name);
  };

  return (
    <div className="flex items-center space-x-4">
      {themes.map((theme) => {
        return (
          <button onClick={() => onThemeChange(theme)} className="theme-btn">
            {theme.name}
          </button>
        );
      })}
      <label>
        Custom Primary:
        <input
          id="custom-primary"
          type="color"
          className="ml-2 p-1 border rounded"
        />
      </label>
    </div>
  );
}
