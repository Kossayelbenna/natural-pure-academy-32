
import { useEffect, useRef } from "react";

// Composant pour créer un effet de laboratoire scientifique
// Ajoute des effets visuels subtils qui renforcent l'impression d'analyse scientifique
export const LabEffects = ({ 
  active = true, 
  density = 50,
  speed = 1,
  colors = ["indigo", "blue", "purple", "teal"]
}: { 
  active?: boolean; 
  density?: number;
  speed?: number;
  colors?: string[];
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const isUnmountedRef = useRef(false);
  
  useEffect(() => {
    // Marquer comme non démonté au montage
    isUnmountedRef.current = false;
    
    if (!active) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Définir les dimensions
    const setCanvasDimensions = () => {
      if (canvas && !isUnmountedRef.current) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    setCanvasDimensions();
    
    // Réinitialiser le canvas lors du redimensionnement
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Créer les particules pour l'effet "laboratoire"
    interface Particle {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      color: string;
    }
    
    const particles: Particle[] = [];
    
    // Générer des particules avec différentes propriétés
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speed: (Math.random() * 0.3 + 0.1) * speed,
        opacity: Math.random() * 0.2 + 0.1,
        color: getRandomColor()
      });
    }
    
    // Générer des couleurs scientifiques aléatoires
    function getRandomColor() {
      const colorMap: Record<string, string> = {
        "indigo": "rgba(63, 81, 181, X)",
        "blue": "rgba(30, 136, 229, X)",
        "purple": "rgba(156, 39, 176, X)",
        "teal": "rgba(0, 137, 123, X)",
        "cyan": "rgba(0, 188, 212, X)",
        "green": "rgba(76, 175, 80, X)"
      };
      
      const selectedColor = colorMap[colors[Math.floor(Math.random() * colors.length)]] || colorMap["indigo"];
      return selectedColor.replace("X", (Math.random() * 0.3 + 0.05).toString());
    }
    
    // Fonction d'animation
    const animate = () => {
      // Vérifier si le composant est démonté pour éviter les fuites mémoire
      if (isUnmountedRef.current || !ctx || !canvas) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        return;
      }
      
      // Effacer avec un effet de traînée
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Mettre à jour et dessiner les particules
      particles.forEach(particle => {
        // Déplacer vers le haut
        particle.y -= particle.speed;
        
        // Réinitialiser si hors de l'écran
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }
        
        // Ajouter un peu de mouvement horizontal
        particle.x += Math.sin(particle.y * 0.01) * 0.2;
        
        // Dessiner la particule
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Ajouter des lignes de connexion occasionnellement
      if (Math.random() > 0.97) {
        const startParticle = particles[Math.floor(Math.random() * particles.length)];
        const endParticle = particles[Math.floor(Math.random() * particles.length)];
        
        ctx.beginPath();
        ctx.moveTo(startParticle.x, startParticle.y);
        ctx.lineTo(endParticle.x, endParticle.y);
        ctx.strokeStyle = "rgba(99, 102, 241, 0.1)";
        ctx.stroke();
      }
      
      // Continuer l'animation
      if (!isUnmountedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    // Démarrer l'animation
    if (!isUnmountedRef.current) {
      animate();
    }
    
    // Nettoyer
    return () => {
      // Marquer comme démonté pour arrêter les animations
      isUnmountedRef.current = true;
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [active, density, speed, colors]);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3, zIndex: -1 }}
      aria-hidden="true"
    />
  );
};

export default LabEffects;
