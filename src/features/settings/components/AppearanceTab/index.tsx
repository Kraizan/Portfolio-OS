import { FC } from 'react';
import { AppearanceTabProps } from '@/types/settings';
import { wallpapers } from '@/context/SettingsContext';

export const AppearanceTab: FC<AppearanceTabProps> = ({ theme, wallpaper, setWallpaper }) => {
  return (
    <div className="app-content">
      {/* Current Theme Preview */}
      <section>
        <h3 className="app-subheading" style={{ color: theme.text }}>Current Theme</h3>
        <div 
          className="app-section border-2"
          style={{ 
            background: theme.primary + 'cc',
            borderColor: theme.secondary + '40'
          }}
        >
          <div className="flex items-center justify-between">
            <span style={{ color: theme.text }}>{theme.name}</span>
          </div>
          <div className="mt-2 flex space-x-2">
            {[theme.primary, theme.secondary, theme.accent].map(
              (color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border border-white/80"
                  style={{ background: color }}
                />
              )
            )}
          </div>
          <p className="mt-4 text-sm opacity-80" style={{ color: theme.text }}>
            Theme colors are automatically generated from the selected wallpaper.
          </p>
        </div>
      </section>

      {/* Wallpaper Section */}
      <section>
        <h3 className="app-subheading" style={{ color: theme.text }}>Wallpaper</h3>
        <div className="grid grid-cols-3 gap-4">
          {wallpapers.map((w) => (
            <button
              key={w.id}
              onClick={() => setWallpaper(w.id)}
              className="app-button relative aspect-video overflow-hidden border-2"
              style={{ 
                borderColor: wallpaper === w.url ? theme.accent : theme.secondary + '40'
              }}
            >
              <img
                src={w.url}
                alt={w.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-sm" style={{ color: theme.text }}>
                {w.name}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}; 