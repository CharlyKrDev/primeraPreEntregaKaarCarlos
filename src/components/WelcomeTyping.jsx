import { TypeAnimation } from 'react-type-animation';

export const WelcomeTyping = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Bienvenid@ a tu tienda gamer amiga!',
                1000, // wait 1s before replacing "Mice" with "Hamsters"

            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};