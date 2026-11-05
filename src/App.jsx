import React, { useState } from 'react';
import {
  Search,
  Settings,
  User,
  ChevronRight,
  Home,
  Users,
  BookOpen,
  Calendar,
  ClipboardList,
  BarChart3,
  Menu,
  Shield
} from 'lucide-react';

import bannerInicial from './assets/branding/banner-inicial.png';
import bannerFinal from './assets/branding/banner-final.png';
import principios from './assets/branding/10-principios.png';
import peopleSupply from './assets/branding/people-supply-solo.png';
import rr from './assets/branding/r&r.png';

import explorarRolesBtn from './assets/botones/explorar-roles.png';
import induccionBtn from './assets/botones/induccion.png';
import agendaBtn from './assets/botones/agenda.png';
import diarioBtn from './assets/botones/diario-a-bordo.png';

import rolesData from './data/roles.json';

// --- COMPONENTES DE LA PÁGINA ---

const Sidebar = ({
  currentView,
  setCurrentView,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <aside
      className={`
      bg-[#00204a]
      text-white
      min-h-screen
      fixed
      left-0
      top-0
      shadow-xl
      transition-all
      duration-300
      ${sidebarOpen ? 'w-64' : 'w-20'}
    `}
    >
      <div className="p-6 border-b border-white/20">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="mb-4"
      >
        <Menu />
      </button>
        {sidebarOpen && (
          <>
            <h2 className="font-bold text-xl">
              People Supply
            </h2>

            <p className="text-xs text-gray-300 mt-1">
              Roles & Responsabilidades
            </p>
          </>
        )}

      </div>

      <nav className="p-4 space-y-2">

        <button
          onClick={() => setCurrentView(VIEWS.HOME)}
          className={`w-full flex items-center gap-3 p-3 rounded ${
            currentView === VIEWS.HOME
              ? 'bg-white text-[#00204a]'
              : 'hover:bg-white/10'
          }`}
        >
          <Home size={18} />
          {sidebarOpen && 'Inicio'}
        </button>

        <button
          onClick={() => setCurrentView(VIEWS.ROLES)}
          className={`w-full flex items-center gap-3 p-3 rounded ${
            currentView === VIEWS.ROLES
              ? 'bg-white text-[#00204a]'
              : 'hover:bg-white/10'
          }`}
        >
          <Users size={18} />
          {sidebarOpen && 'Roles'}  
        </button>

        

        <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-white/10">
          <BarChart3 size={18} />
          {sidebarOpen && 'Indicadores'}
        </button>

      </nav>


      <div className="mt-auto border-t border-white/20 p-4">

        <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-white/10">
          <Search size={18} />
          {sidebarOpen && 'Buscar'}
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-white/10">
          <Settings size={18} />
          {sidebarOpen && 'Configuración'}
        </button>

        <button className="w-full flex items-center gap-3 p-3 rounded hover:bg-white/10">
          <User size={18} />
          {sidebarOpen && 'Mi Perfil'}
        </button>

      </div>
    </aside>
  );
};

const Navbar = () => (
  <nav className="bg-[#00204a] text-white flex flex-col md:flex-row items-center justify-between px-6 py-3 sticky top-0 z-50 shadow-md">
    <div className="flex items-center space-x-4 mb-4 md:mb-0">
      <div className="bg-white text-black font-black leading-none p-1.5 text-center flex flex-col justify-center border-2 border-black">
        <span className="text-[10px] tracking-widest">SOMOS</span>
        <span className="text-[9px] tracking-tight">DUEÑOS & DUEÑAS</span>
      </div>
      <h1 className="text-sm md:text-lg font-bold border-l border-white/30 pl-4">
        Portal Roles & Responsabilidades | People Supply
      </h1>
    </div>

    <div className="flex items-center space-x-4 md:space-x-8 text-sm font-medium">
    
    </div>
  </nav>
);

const QuickAccess = () => (
  <section
    style={{
      background: '#ffffff',
      padding: '40px',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    }}
  >
    <button
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <img src={explorarRolesBtn} alt="Explorar Roles" width="220" />
    </button>

    <button
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <img src={induccionBtn} alt="Inducción" width="220" />
    </button>

    <button
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <img src={agendaBtn} alt="Agenda" width="220" />
    </button>

    <button
      style={{
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <img src={diarioBtn} alt="Diario de Bordo" width="220" />
    </button>
  </section>
);

const BrandsBanner = () => (
  <section>
    <img
      src={bannerInicial}
      alt="Banner Principal"
      style={{
        width: '100%',
        display: 'block',
      }}
    />
  </section>
);

const PrinciplesSection = () => (
  <section>
    <img
      src={principios}
      alt="10 Principios"
      style={{
        width: '100%',
        display: 'block',
      }}
    />
  </section>
);

const BigTitlesSection = () => (
  <section>
    <img
      src={peopleSupply}
      alt="People Supply"
      style={{
        width: '100%',
        display: 'block',
      }}
    />

    <img
      src={rr}
      alt="Roles y Responsabilidades"
      style={{
        width: '100%',
        display: 'block',
      }}
    />
  </section>
);

const Dashboard = () => {
  return (
    <section className="p-8">

      <h2 className="text-3xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-green-500">
          <h3 className="text-4xl font-bold">82</h3>
          <p>Roles Totales</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-green-500">
          <h3 className="text-4xl font-bold">65%</h3>
          <p>Documentación Vigente</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-yellow-500">
          <h3 className="text-4xl font-bold">22</h3>
          <p>En Revisión</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 border-l-8 border-red-500">
          <h3 className="text-4xl font-bold">7</h3>
          <p>Vencidos</p>
        </div>

      </div>

    </section>
  );
};

// --- COMPONENTE PRINCIPAL DE TARJETAS DE ROLES (DINÁMICO) ---
const RolesSection = () => {
  return (
    <section className="p-8">

      <h2 className="text-3xl font-bold mb-8">
        Últimos Roles Actualizados
      </h2>

      <p className="text-gray-600 mb-8">
        Visualiza los roles con actualizaciones recientes en Job Description,
        Inducción, Agenda o Diario de Bordo.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {rolesData.slice(0, 3).map((role) => (

          <div
            key={role.id}
            onClick={() =>
              console.log(`Abrir rol ${role.title}`)
            }
            className="
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              hover:shadow-2xl
              hover:-translate-y-1
              transition-all
              cursor-pointer
            "
          >

            <div className="p-5 border-b border-gray-200">

              <h3 className="text-xl font-bold text-[#00204a]">
                {role.title}
              </h3>

              <p className="text-sm text-gray-300">
                {role.areaInfo}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                Actualizado hace 2 días
              </p>

            </div>

            <div className="p-5">

              <div className="mb-4">
                <span className="text-xs text-gray-500">
                  Dueño
                </span>

                <div className="flex justify-between items-center mb-4">

                  <span
                    className="
                      bg-blue-50
                      text-[#00204a]
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-bold
                    "
                  >
                    {role.areaTag}
                  </span>

                  <span className="text-xs text-gray-500">
                    Actualizado hoy
                  </span>

                </div>

                <p className="font-semibold">
                  {role.responsable}
                </p>
              </div>

              <div className="flex gap-2 flex-wrap mb-4">
                <div className="mb-5">

                <div className="flex justify-between text-sm mb-1">

                  <span className="font-medium">
                    Vigencia General
                  </span>

                  <span className="font-bold">
                    {role.statusTag}
                  </span>

                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{
                      width:
                        role.statusTag.includes('25')
                          ? '25%'
                          : role.statusTag.includes('50')
                          ? '50%'
                          : '80%',
                    }}
                  />

                </div>

              </div>


                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                  {role.areaTag}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${role.statusColor}`}
                >
                  {role.statusTag}
                </span>

              </div>

              <div className="grid grid-cols-2 gap-3">

                {role.documents.map((doc, idx) => (

                  <div
                    key={idx}
                    className={`rounded-lg p-3 text-center border ${
                      doc.isGreen
                        ? 'bg-green-50 border-green-300'
                        : 'bg-yellow-50 border-yellow-300'
                    }`}
                  >

                    <div className="flex items-center justify-center gap-2">

                      <div
                        className={`w-3 h-3 rounded-full ${
                          doc.isGreen
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`}
                      />

                      <span
                        className={`font-bold text-sm ${
                          doc.isGreen
                            ? 'text-green-700'
                            : 'text-yellow-700'
                        }`}
                      >
                        {doc.type}
                      </span>

                    </div>

                    <div className="text-xs mt-1">
                      {doc.status}
                    </div>

                    <div className="text-[10px] text-gray-500 mt-1">
                      Última actualización
                    </div>

                  </div>

                ))}

              </div>

              <button
                className="mt-6 w-full bg-[#00204a] text-white py-3 rounded-lg font-bold hover:bg-blue-900"
              >
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
    style={{
      width: '100%',
      display: 'block',
    }}
  />
);

const currentUser = {
  nombre: "Sebastian Bahamondes",
  correo: "correo",
  rol: "ADMIN"
}

const VIEWS = {
  HOME: 'home',
  ROLES: 'roles',
  INDUCCION: 'induccion',
  AGENDA: 'agenda',
  DIARIO: 'diario',
  INDICADORES: 'indicadores',
};

export default function App() {

  const [currentView, setCurrentView] =
    useState(VIEWS.HOME);

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const renderContent = () => {

    switch (currentView) {

      case VIEWS.ROLES:
        return <RolesSection />;

      case VIEWS.INDUCCION:
        return <h1 className="p-8">Inducción</h1>;

      case VIEWS.AGENDA:
        return <h1 className="p-8">Agenda</h1>;

      case VIEWS.DIARIO:
        return <h1 className="p-8">Diario de Bordo</h1>;

      case VIEWS.INDICADORES:
        return <h1 className="p-8">Indicadores</h1>;

      default:
        return (
          <>
            <BrandsBanner />

            <QuickAccess />

            <PrinciplesSection />

            <BigTitlesSection />

            <Dashboard />

            <RolesSection />
          </>
        );
    }
  };

  return (

    <div className="flex bg-[#f3f4f6]">

      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main
        className={`
          flex-1
          transition-all
          duration-300
          ${sidebarOpen ? 'ml-64' : 'ml-20'}
        `}
      >

        <Navbar />

        {renderContent()}

        <Footer />

      </main>

    </div>

  );
}