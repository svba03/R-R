import React from 'react';
import { Search, Settings, User, ChevronRight } from 'lucide-react';

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

// Constantes de colores corporativos
const COLORS = {
  blue: '#00204a',
  yellow: '#ffcc00',
  black: '#111111',
  white: '#ffffff',
  lightGray: '#f3f4f6',
};

// --- COMPONENTES DE LA PÁGINA ---

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
      <div className="hidden lg:flex space-x-6">
        <a href="#" className="border-b-2 border-white pb-1">
          Página Inicial
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Explorar Roles
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Inducción
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Mi Agenda
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Diario de Bordo
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Navegación Editar
        </a>
      </div>

      <div className="flex items-center space-x-4 bg-white/10 px-3 py-1.5 rounded-md">
        <Search
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
        <Settings
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
        <User
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
      </div>
      <button className="bg-white text-[#00204a] text-xs font-bold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors hidden sm:block">
        Publicar cambios
      </button>
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

const IconsBanner = () => {
  const icons = [
    { Icon: Rocket, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: BarChart2, bg: 'bg-white', color: 'text-black' },
    { Icon: CheckCircle, bg: 'bg-[#d4a373]', color: 'text-black' }, // Tono café claro de la imagen
    { Icon: Users, bg: 'bg-[#111111]', color: 'text-[#ffcc00]' },
    { Icon: Coffee, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: Target, bg: 'bg-white', color: 'text-black' },
    { Icon: Box, bg: 'bg-[#d4a373]', color: 'text-black' },
    { Icon: PiggyBank, bg: 'bg-[#111111]', color: 'text-[#ffcc00]' },
    { Icon: Clock, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: AlertTriangle, bg: 'bg-white', color: 'text-black' },
  ];

  return (
    <div className="grid grid-cols-5 md:grid-cols-10 h-24">
      {icons.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} ${item.color} flex items-center justify-center border-r border-black/10 last:border-0`}
        >
          <item.Icon size={32} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

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

// --- COMPONENTE PRINCIPAL DE TARJETAS DE ROLES (DINÁMICO) ---
const RolesSection = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">
          Últimos Roles Actualizados
        </h2>

        <p className="text-gray-600 mb-12 text-lg">
          <div className="space-y-4">
            {rolesData.map((role) => (
              <div
                key={role.id}
                style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  borderLeft: '6px solid #00204a',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <h3>{role.title}</h3>

                <p>{role.areaInfo}</p>

                <p>Responsable: {role.responsable}</p>
              </div>
            ))}
          </div>
          Consulta la documentación vigente, inducción, agenda y rutinas
          asociadas a cada Rol.
        </p>
      </div>
    </div>
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans selection:bg-[#ffcc00] selection:text-black">
      <Navbar />
      <BrandsBanner />
      <QuickAccess />
      <PrinciplesSection />
      <BigTitlesSection />
      <RolesSection />
      <Footer />
    </div>
  );
}
