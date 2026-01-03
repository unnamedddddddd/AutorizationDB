import { useState } from "react";

const Button = ({
  onClick,
  variant,
  size = 'small',
  children,
}) => {
  const variants = {
    add: {
      padding: '8px 24px',
      backgroundColor: '#8b5cf6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    delete: {
      padding: '6px 10px',
      backgroundColor: '#430149',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    edit: {
      padding: '6px 10px',
      backgroundColor: '#8b5cf6',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px'
    }
  };

  const sizes = {
    small: {
      padding: '4px 8px',
      fontSize: '13px'
    },
    large: {
      padding: '12px 24px',
      fontSize: '18px'
    }
  };

  const hoverEffects = {
    add: { backgroundColor: '#7c3aed' },
    delete: { backgroundColor: '#210124' },
    edit: { backgroundColor: '#7c3aed' },
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button className={`btn-${variant}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        type="button"
        style={{
          ...sizes[size],
          ...variants[variant],
          backgroundColor: isHovered ? hoverEffects[variant].backgroundColor : variants[variant].backgroundColor
        }}
      >{children}</button>
    </>
  );
}

export default Button;