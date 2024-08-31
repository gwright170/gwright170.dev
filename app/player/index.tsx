'use client';

import { Container } from '@mantine/core';
import { useEffect, useRef } from 'react';
import shaka from 'shaka-player';

type IVideoPlaybackConfigProps = {
  url: string;
};

const Player = ({ url }: IVideoPlaybackConfigProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<shaka.Player | null>(null);

  useEffect(() => {
    shaka.polyfill.installAll();

    if (videoRef.current) {
      const player = new shaka.Player(videoRef.current);
      playerRef.current = player;

      player
        .load(url)
        .then(() => {
          // This runs if the asynchronous load is successful.
          console.log('The video has now been loaded! ');
        })
        .catch(onError);

      player.addEventListener('error', onErrorEvent);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [url]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onErrorEvent = (event: any) => {
    onError(event.detail);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (error: any) => {
    console.error('Error code', error.code, 'object', error);
  };

  return (
    <Container size="sm">
      <section>
        <video
          ref={videoRef}
          width="656"
          poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          controls
          autoPlay
        />
      </section>
    </Container>
  );
};

export default Player;
