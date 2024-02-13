import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Counter />
            <BugButton />
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
