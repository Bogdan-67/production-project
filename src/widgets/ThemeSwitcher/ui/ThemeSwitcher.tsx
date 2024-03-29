import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-day.svg';
import DarkIcon from 'shared/assets/icons/theme-night.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
});
