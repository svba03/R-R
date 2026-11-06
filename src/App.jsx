import React, { useState } from 'react';
import {
  Search,
  Settings,
  User,
  Home,
  Users,
  BarChart3,
  Menu
} from 'lucide-react';

import bannerInicial from './assets/branding/banner-inicial.png';
import bannerFinal from './assets/branding/banner-final.png';

import PrinciplesGrid from './Principles';
import rr from './assets/branding/r&r.png';

import explorarRolesBtn from './assets/botones/explorar-roles.png';
import induccionBtn from './assets/botones/induccion.png';
import agendaBtn from './assets/botones/agenda.png';
import diarioBtn from './assets/botones/diario-a-bordo.png';

import rolesData from './data/roles.json';

// --- COMPONENTES DE LA PÁGINA ---

const Sidebar = ({ currentView, setCurrentView, sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`bg-[#00204a] text-white min-h-screen fixed left-0 top-0 shadow-xl transition-all duration-300 z-50 flex flex-col ${
        sidebarOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="p-6 border-b border-white/20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-4 text-white hover:opacity-80 transition-opacity"
        >
          <Menu />
        </button>
        {sidebarOpen && (
          <>
            <h2 className="font-bold text-xl text-white">People Supply</h2>
            <p className="text-xs text-gray-300 mt-1">Roles & Responsabilidades</p>
          </>
        )}
      </div>

      <nav className="p-4 space-y-2">
        <button
          onClick={() => setCurrentView(VIEWS.HOME)}
          className={`w-full flex items-center gap-3 p-3 rounded font-medium transition-colors ${
            currentView === VIEWS.HOME
              ? 'bg-white text-[#00204a] font-bold'
              : 'hover:bg-white/10 text-white'
          }`}
        >
          <Home size={18} />
          {sidebarOpen && 'Inicio'}
        </button>

        <button
          onClick={() => setCurrentView(VIEWS.ROLES)}
          className={`w-full flex items-center gap-3 p-3 rounded font-medium transition-colors ${
            currentView === VIEWS.ROLES
              ? 'bg-white text-[#00204a] font-bold'
              : 'hover:bg-white/10 text-white'
          }`}
        >
          <Users size={18} />
          {sidebarOpen && 'Roles'}
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded font-medium hover:bg-white/10 text-white transition-colors">
          <BarChart3 size={18} />
          {sidebarOpen && 'Indicadores'}
        </button>
      </nav>

      {/* Botones anclados en la parte inferior */}
      <div className="mt-auto border-t border-white/20 p-4 space-y-1">
        <button className="w-full flex items-center gap-3 p-3 rounded font-medium hover:bg-white/10 text-white transition-colors">
          <Search size={18} />
          {sidebarOpen && 'Buscar'}
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded font-medium hover:bg-white/10 text-white transition-colors">
          <Settings size={18} />
          {sidebarOpen && 'Configuración'}
        </button>
        <button className="w-full flex items-center gap-3 p-3 rounded font-medium hover:bg-white/10 text-white transition-colors">
          <User size={18} />
          {sidebarOpen && 'Mi Perfil'}
        </button>
      </div>
    </aside>
  );
};

const Navbar = () => (
  <nav className="bg-[#00204a] text-white flex flex-col md:flex-row items-center justify-between px-6 py-3 sticky top-0 z-40 shadow-md">
    <div className="flex items-center space-x-4 mb-4 md:mb-0">
      <div className="bg-white text-black font-black leading-none p-1.5 text-center flex flex-col justify-center border-2 border-black">
        <span className="text-[10px] tracking-widest">SOMOS</span>
        <span className="text-[9px] tracking-tight">DUEÑOS & DUEÑAS</span>
      </div>
      <h1 className="text-sm md:text-lg font-bold border-l border-white/30 pl-4 text-white">
        Portal Roles & Responsabilidades | People Supply
      </h1>
    </div>
  </nav>
);

// Botones originales diseñados, más grandes y con fondo de transición armónico
const QuickAccess = ({ activeFilter, setActiveFilter }) => {
  const buttons = [
    { id: 'ALL', img: explorarRolesBtn, alt: 'Explorar Roles' },
    { id: 'INDUCCION', img: induccionBtn, alt: 'Inducción' },
    { id: 'AGENDA', img: agendaBtn, alt: 'Agenda' },
    { id: 'DIARIO', img: diarioBtn, alt: 'Diario de Bordo' }
  ];

  return (
    <section className="bg-gradient-to-b from-[#FFF9E6] via-[#F1F5F9] to-[#CBD5E1] py-6 flex justify-center items-center border-b border-slate-400/50">
      
      {/* El padding (px-6 sm:px-10) ahora está AQUÍ adentro. 
          Esto crea un "colchón" interno para que el botón pueda crecer sin activar la barra */}
      <div className="flex justify-between items-center w-full max-w-7xl overflow-x-auto gap-4 scrollbar-hide py-4 px-6 sm:px-10">
        
        {buttons.map((btn) => {
          const isSelected = activeFilter === btn.id && activeFilter !== 'ALL';
          return (
            <button
              key={btn.id}
              onClick={() =>
                setActiveFilter(activeFilter === btn.id ? 'ALL' : btn.id)
              }
              className={`border-none bg-transparent cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 focus:outline-none flex-shrink-0 ${
                isSelected ? 'scale-105 drop-shadow-lg' : 'opacity-95 hover:opacity-100'
              }`}
            >
              <img
                src={btn.img}
                alt={btn.alt}
                className="w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px] h-auto block"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

const BrandsBanner = () => (
  <section>
    <img src={bannerInicial} alt="Banner Principal" className="w-full block" />
  </section>
);

const BigTitlesSection = () => (
  <section>
    <img src={rr} alt="Roles y Responsabilidades" className="w-full block" />
  </section>
);

const Dashboard = () => {
  return (
    <section className="pt-8 pb-4 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-[#00204a] mb-5">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-5 border-l-8 border-l-green-500">
          <h3 className="text-3xl font-bold text-slate-800">82</h3>
          <p className="text-sm text-gray-600 mt-0.5">Roles Totales</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-5 border-l-8 border-l-green-500">
          <h3 className="text-3xl font-bold text-slate-800">65%</h3>
          <p className="text-sm text-gray-600 mt-0.5">Documentación Vigente</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-5 border-l-8 border-l-yellow-500">
          <h3 className="text-3xl font-bold text-slate-800">22</h3>
          <p className="text-sm text-gray-600 mt-0.5">En Revisión</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-5 border-l-8 border-l-red-500">
          <h3 className="text-3xl font-bold text-slate-800">7</h3>
          <p className="text-sm text-gray-600 mt-0.5">Vencidos</p>
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE DE TARJETAS DE ROLES (COMPACTADO Y CON SEMÁFOROS SUAVES) ---
const RolesSection = () => {
  return (
    <section className="py-6 px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-[#00204a] mb-2">
        Últimos Roles Actualizados
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        Visualiza los roles con actualizaciones recientes en Job Description,
        Inducción, Agenda o Diario de Bordo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {rolesData.slice(0, 3).map((role) => (
          <div
            key={role.id}
            onClick={() => console.log(`Abrir rol ${role.title}`)}
            className="bg-white rounded-xl shadow-md border border-slate-300/80 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            {/* Cabecera compacta */}
            <div className="px-5 py-3.5 border-b border-gray-200 bg-slate-50/60 flex justify-between items-start gap-2">
              <div>
                <h3 className="text-lg font-bold text-[#00204a] leading-snug">
                  {role.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{role.areaInfo}</p>
              </div>
              <span className="text-[11px] text-gray-400 whitespace-nowrap mt-1">
                Actualizado hace 2 días
              </span>
            </div>

            {/* Cuerpo compacto */}
            <div className="p-4">
              {/* Fila Dueño + Barra de Vigencia */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <span className="text-[11px] text-gray-500 block">Dueño</span>
                  <p className="font-semibold text-sm text-slate-800">
                    {role.responsable}
                  </p>
                </div>

                <div className="w-full sm:w-48">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-gray-600">
                      Vigencia General
                    </span>
                    <span className="font-bold text-slate-800">
                      {role.statusTag}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{
                        width: role.statusTag.includes('25')
                          ? '25%'
                          : role.statusTag.includes('50')
                          ? '50%'
                          : '80%'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Etiquetas suaves originales */}
              <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-blue-50 text-[#00204a] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    {role.areaTag}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    {role.areaTag}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${role.statusColor}`}
                  >
                    {role.statusTag}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400">
                  Actualizado hoy
                </span>
              </div>

              {/* Cuadrícula de documentos con colores de semáforo suaves */}
              <div className="grid grid-cols-2 gap-2.5">
                {role.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-2.5 text-center border ${
                      doc.isGreen
                        ? 'bg-green-50 border-green-300'
                        : 'bg-yellow-50 border-yellow-300'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <div
                        className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                          doc.isGreen ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                      />
                      <span
                        className={`font-bold text-xs ${
                          doc.isGreen ? 'text-green-700' : 'text-yellow-700'
                        }`}
                      >
                        {doc.type}
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-700 mt-0.5">
                      {doc.status}
                    </div>

                    <div className="text-[10px] text-gray-500">
                      Última actualización
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón sobrio con transparencia sutil al pasar el cursor */}
              <button className="mt-4 w-full bg-[#00204a] text-white py-2.5 rounded-lg text-sm font-bold hover:bg-[#00204a]/85 transition-all">
                Ver ficha completa →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <img
    src={bannerFinal}
    alt="Footer"
    className="w-full block mt-8"
  />
);

const VIEWS = {
  HOME: 'home',
  ROLES: 'roles',
  INDUCCION: 'induccion',
  AGENDA: 'agenda',
  DIARIO: 'diario',
  INDICADORES: 'indicadores'
};

export default function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const renderContent = () => {
    switch (currentView) {
      case VIEWS.ROLES:
        return <RolesSection activeFilter="ALL" />;
      case VIEWS.INDUCCION:
        return <h1 className="p-8 text-2xl font-bold text-[#00204a]">Inducción</h1>;
      case VIEWS.AGENDA:
        return <h1 className="p-8 text-2xl font-bold text-[#00204a]">Agenda</h1>;
      case VIEWS.DIARIO:
        return <h1 className="p-8 text-2xl font-bold text-[#00204a]">Diario de Bordo</h1>;
      case VIEWS.INDICADORES:
        return <h1 className="p-8 text-2xl font-bold text-[#00204a]">Indicadores</h1>;
      default:
        return (
          <>
            <BrandsBanner />
            <PrinciplesGrid />
            <BigTitlesSection />
            <QuickAccess
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
            <Dashboard />
            <RolesSection activeFilter={activeFilter} />
          </>
        );
    }
  };

  return (
    <div className="flex bg-[#E2E8F0] min-h-screen">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <Navbar />
        {renderContent()}
        <Footer />
      </main>
    </div>
  );
}