import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'bosque' | 'noche' | 'cobre'; // colores de la paleta Bosque Nocturno
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = React.forwardRef(
  ({ children, color = 'bosque', onPress, onLongPress, variant = 'contained', className }: Props, ref: React.Ref<View>) => {
    const bgColor = { bosque: 'bg-bosque', noche: 'bg-noche', cobre: 'bg-cobre' }[color];
    const textColor = { bosque: 'text-bosque', noche: 'text-noche', cobre: 'text-cobre' }[color];

    if (variant === 'text-only') {
      return (
        <Pressable className={`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress} ref={ref}>
          <Text className={`text-center ${textColor} font-cuerpo-medio`}>{children}</Text>
        </Pressable>
      );
    }

    return (
      <Pressable className={`p-3 rounded-md ${bgColor} active:opacity-90 ${className}`} onPress={onPress} onLongPress={onLongPress} ref={ref}>
        <Text className="text-white text-center font-cuerpo-medio">{children}</Text>
      </Pressable>
    );
  }
);

export default CustomButton;
