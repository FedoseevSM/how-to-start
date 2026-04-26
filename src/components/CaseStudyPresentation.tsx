import React, { useEffect, useState } from 'react';
import {
  Lightbulb,
  Truck,
  Smartphone,
  Megaphone,
  Trophy,
  Palette,
  Server,
  Laptop,
  Target,
  Crown,
  ChevronLeft,
  ChevronRight,
  RotateCcw } from
'lucide-react';
import { StageSlide } from './StageSlide';
import { ProgressIndicator } from './ProgressIndicator';
import { DesktopTimeline } from './DesktopTimeline';
const STAGES = [
{
  id: 1,
  title: 'Идея интернет-магазина',
  description:
  'Разработка концепции дропшиппинга товаров из Китая. Анализ ниши баскетбольной экипировки и определение целевой аудитории.',
  icon: Lightbulb
},
{
  id: 2,
  title: 'Поиск поставщика',
  description:
  'Отбор надежных партнеров в Китае, проверка качества кроссовок и аксессуаров, согласование условий доставки и возврата.',
  icon: Truck
},
{
  id: 3,
  title: 'Посадочная страница в соцсетях',
  description:
  'Создание и оформление аккаунтов в Instagram и VK. Подготовка контент-плана и первых постов с обзорами товаров.',
  icon: Smartphone
},
{
  id: 4,
  title: 'Закупка рекламы у сообществ',
  description:
  'Посев рекламы в тематических баскетбольных пабликах и спортивных сообществах для привлечения первых подписчиков.',
  icon: Megaphone
},
{
  id: 5,
  title: 'Проведение конкурсов',
  description:
  'Организация розыгрышей кроссовок за репост и отметки друзей для вирусного охвата и быстрого роста аудитории.',
  icon: Trophy
},
{
  id: 6,
  title: 'Фирменный стиль и айдентика',
  description:
  'Разработка логотипа, цветовой палитры (оранжевый/черный) и брендбука для узнаваемости магазина на рынке.',
  icon: Palette
},
{
  id: 7,
  title: 'Хостинг и размещение',
  description:
  'Выбор надежного хостинг-провайдера, регистрация доменного имени и настройка серверной инфраструктуры.',
  icon: Server
},
{
  id: 8,
  title: 'Создание веб-сайта',
  description:
  'Разработка полноценного интернет-магазина с каталогом, корзиной и онлайн-оплатой. Адаптация под мобильные устройства.',
  icon: Laptop
},
{
  id: 9,
  title: 'Контекстная и таргет реклама',
  description:
  'Запуск рекламных кампаний в Яндекс.Директ и таргетинга в соцсетях для привлечения горячего трафика на сайт.',
  icon: Target
},
{
  id: 10,
  title: 'Создание имиджа бренда',
  description:
  'Работа над репутацией, сбор отзывов, сотрудничество с инфлюенсерами и формирование лояльного комьюнити.',
  icon: Crown
}];

export function CaseStudyPresentation() {
  const [currentStage, setCurrentStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const nextStage = () => {
    if (currentStage < STAGES.length - 1) {
      setCurrentStage((prev) => prev + 1);
    }
  };
  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage((prev) => prev - 1);
    }
  };
  const reset = () => setCurrentStage(0);
  // Keyboard navigation (only for mobile slider)
  useEffect(() => {
    if (!isMobile) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextStage();
      if (e.key === 'ArrowLeft') prevStage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage, isMobile]);
  // Desktop: Full-screen timeline with scroll
  if (!isMobile) {
    return <DesktopTimeline stages={STAGES} />;
  }
  // Mobile: Slider view
  const isFirst = currentStage === 0;
  const isLast = currentStage === STAGES.length - 1;
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col min-h-[600px] border border-gray-100">
        {/* Header */}
        <div className="bg-gray-900 p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          <h1 className="text-xl font-bold relative z-10 flex items-center gap-2">
            <span className="text-orange-500">Time 2 Win</span> Баскетбольный
            магазин
          </h1>
          <p className="text-gray-400 text-xs mt-1 relative z-10">
            Путь создания компании
          </p>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col">
          <ProgressIndicator
            currentStep={currentStage}
            totalSteps={STAGES.length}
            onStepClick={setCurrentStage} />
          

          <div className="flex-1 flex items-center justify-center py-4">
            {STAGES.map((stage, index) =>
            <StageSlide
              key={stage.id}
              {...stage}
              stageNumber={index + 1}
              isActive={index === currentStage} />

            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-6 bg-gray-50 border-t border-gray-100">
          <div className="flex gap-4">
            <button
              onClick={prevStage}
              disabled={isFirst}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${isFirst ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-orange-200 active:scale-95'}`}>
              
              <ChevronLeft className="w-5 h-5" />
              Назад
            </button>

            {isLast ?
            <button
              onClick={reset}
              className="flex-1 py-3 px-4 rounded-xl font-semibold bg-gray-900 text-white flex items-center justify-center gap-2 hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-gray-900/20">
              
                <RotateCcw className="w-5 h-5" />В начало
              </button> :

            <button
              onClick={nextStage}
              className="flex-1 py-3 px-4 rounded-xl font-semibold bg-orange-500 text-white flex items-center justify-center gap-2 hover:bg-orange-600 active:scale-95 transition-all shadow-lg shadow-orange-500/30">
              
                Далее
                <ChevronRight className="w-5 h-5" />
              </button>
            }
          </div>
        </div>
      </div>
    </div>);

}