import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed w-[200px] h-[200px] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(212, 163, 115, 0.15) 0%, transparent 70%)'
      }}
    />
  );
}
