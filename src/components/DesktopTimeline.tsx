import React from 'react';
import { BoxIcon } from 'lucide-react';
interface Stage {
  id: number;
  title: string;
  description: string;
  icon: BoxIcon;
}
interface DesktopTimelineProps {
  stages: Stage[];
}
export function DesktopTimeline({ stages }: DesktopTimelineProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Header */}
      <header className="relative py-20 px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange-600 rounded-full blur-[100px] opacity-15"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            <span className="text-orange-400 text-sm font-medium">
              Кейс-стади
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            <span className="text-orange-500">Time 2 Win</span>
            <br />
            <span className="text-3xl md:text-4xl font-bold text-gray-300">
              Баскетбольный магазин
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            10 этапов создания успешного интернет-магазина спортивных товаров
            для баскетбола
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <span className="text-orange-500 font-bold">10</span>
              </div>
              <span>Этапов</span>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="text-sm">Прокрутите вниз для просмотра</div>
          </div>
        </div>
      </header>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-8 pb-32">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent transform -translate-x-1/2"></div>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const isEven = index % 2 === 0;
          return (
            <div
              key={stage.id}
              className={`relative flex items-center mb-24 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
              
              {/* Content Card */}
              <div
                className={`w-5/12 ${isEven ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                
                <div
                  className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group`}>
                  
                  <div
                    className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    
                    <span className="text-orange-500 font-mono text-sm">
                      0{stage.id}
                    </span>
                    <div className="h-px w-8 bg-orange-500/50"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 blur-xl opacity-30 rounded-full scale-150"></div>
                  <div className="relative w-20 h-20 bg-gray-900 border-4 border-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {stage.id}
                  </div>
                </div>
              </div>

              {/* Empty space for opposite side */}
              <div className="w-5/12"></div>
            </div>);

        })}

        {/* End marker */}
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-full px-8 py-4 shadow-lg shadow-orange-500/30">
            <span className="text-white font-bold text-lg">
              🏀 Готово к запуску!
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 text-center">
        <p className="text-gray-500 text-sm">
          Time 2 Win — Путь к успешному баскетбольному бизнесу
        </p>
      </footer>
    </div>);

}