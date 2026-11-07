'use client';

import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

/**
 * "See it in action" — tutorial videos from the KamperHub Tutorials playlist.
 *
 * Click-to-play: each card shows a thumbnail served from /public, and the YouTube
 * player (youtube-nocookie.com) is only loaded after the visitor presses play. Until
 * then the page makes no request to YouTube or Google.
 *
 * Only list videos that are PUBLIC on YouTube — a scheduled/private video shows
 * "Video unavailable" inside the player. Tow Simulator (Tutorial 14) goes public
 * Tue 24 Nov 2026 6pm AEST; swap it in for Tutorial 7 after that.
 */
export const TUTORIALS_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLdzdByBSmCYc';

export interface TutorialVideo {
  id: string;
  number: number;
  title: string;
  length: string;
  blurb: string;
}

export const TUTORIAL_VIDEOS: TutorialVideo[] = [
  {
    id: 'UEwrSgN05c8',
    number: 3,
    title: 'Adding your vehicle',
    length: '1:32',
    blurb: 'Pick your make and model — GCM, towing capacity and towball limits fill in for you.',
  },
  {
    id: 'j9LmJ55mM2o',
    number: 4,
    title: 'Adding your caravan',
    length: '1:34',
    blurb: 'Add your van from our catalogue and see your weights straight away.',
  },
  {
    id: 'u5T9-i5pzfY',
    number: 7,
    title: 'Planning your first trip',
    length: '2:21',
    blurb: 'From start to destination — travellers, vehicle and caravan, all in one trip.',
  },
];

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}

const ink = '#111827';
const muted = '#6b7280';
const sage = '#6b8e6b';
const sageDark = '#5a7a5a';
const cream = '#fdfbf7';

function VideoCard({ video }: { video: TutorialVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
      border: '1px solid rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', backgroundColor: '#1f3a2c' }}>
        {playing ? (
          <iframe
            src={youtubeEmbedUrl(video.id)}
            title={`KamperHub Tutorial ${video.number}: ${video.title}`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play tutorial ${video.number}: ${video.title} (${video.length})`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              padding: 0,
              border: 0,
              cursor: 'pointer',
              background: 'none',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static local thumbnail, sized by its 16:9 box */}
            <img
              src={`/videos/tutorials/${video.id}.jpg`}
              alt=""
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(17, 24, 39, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Play size={28} color="#ffffff" fill="#ffffff" style={{ marginLeft: '4px' }} />
            </span>
            <span style={{
              position: 'absolute',
              right: '10px',
              bottom: '10px',
              padding: '2px 8px',
              borderRadius: '6px',
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 600,
            }}>
              {video.length}
            </span>
          </button>
        )}
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: ink, margin: '0 0 6px 0' }}>
          {video.title}
        </h3>
        <p style={{ fontSize: '15px', color: muted, lineHeight: 1.6, margin: 0 }}>
          {video.blurb}
        </p>
      </div>
    </div>
  );
}

export default function TutorialVideos() {
  return (
    <section id="tutorials" style={{ padding: '80px 0', backgroundColor: cream }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', margin: '0 0 16px 0', color: ink }}>
          See KamperHub in Action
        </h2>
        <p style={{ textAlign: 'center', color: muted, margin: '0 auto 48px', fontSize: '18px', maxWidth: '640px' }}>
          Short step-by-step videos. Set up your rig and plan your first trip in a few minutes.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '24px',
        }}>
          {TUTORIAL_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={TUTORIALS_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              border: `2px solid ${sage}`,
              color: sageDark,
              fontWeight: 600,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Watch the full tutorial series on YouTube
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
