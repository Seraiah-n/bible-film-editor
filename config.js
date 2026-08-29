/**
 * Configuration file for Bible Film Editor
 * Customize these settings for your specific project needs
 */

module.exports = {
  // Video compression quality presets
  compressionQuality: {
    low: {
      codec: 'libx265',
      crf: 28,           // Higher number = lower quality, smaller file
      audioBitrate: '96k'
    },
    medium: {
      codec: 'libx265',
      crf: 23,
      audioBitrate: '128k'
    },
    high: {
      codec: 'libx265',
      crf: 18,
      audioBitrate: '192k'
    }
  },

  // Default video resolutions for different platforms
  resolutions: {
    mobile: { width: 720, height: 480 },
    tablet: { width: 1024, height: 768 },
    hd: { width: 1280, height: 720 },
    fullhd: { width: 1920, height: 1080 },
    uhd: { width: 3840, height: 2160 }
  },

  // Common video formats and their extensions
  formats: {
    mp4: { ext: '.mp4', codec: 'h264', container: 'mp4' },
    mkv: { ext: '.mkv', codec: 'h264', container: 'matroska' },
    avi: { ext: '.avi', codec: 'mpeg4', container: 'avi' },
    mov: { ext: '.mov', codec: 'h264', container: 'mov' },
    webm: { ext: '.webm', codec: 'vp9', container: 'webm' }
  },

  // Watermark positions
  watermarkPositions: {
    'top-left': '10:10',
    'top-right': 'W-w-10:10',
    'bottom-left': '10:H-h-10',
    'bottom-right': 'W-w-10:H-h-10'
  },

  // Default project paths
  paths: {
    scenes: './scenes',
    audio: './audio',
    subtitles: './subtitles',
    assets: './assets',
    output: './output',
    temp: './temp',
    final: './final_output'
  },

  // Supported subtitle languages (ISO 639-1 codes)
  languages: [
    { code: 'en', name: 'English', file: 'english.srt' },
    { code: 'es', name: 'Spanish', file: 'spanish.srt' },
    { code: 'fr', name: 'French', file: 'french.srt' },
    { code: 'de', name: 'German', file: 'german.srt' },
    { code: 'it', name: 'Italian', file: 'italian.srt' },
    { code: 'pt', name: 'Portuguese', file: 'portuguese.srt' },
    { code: 'ja', name: 'Japanese', file: 'japanese.srt' },
    { code: 'zh', name: 'Chinese', file: 'chinese.srt' },
    { code: 'ar', name: 'Arabic', file: 'arabic.srt' },
    { code: 'hi', name: 'Hindi', file: 'hindi.srt' }
  ],

  // Audio settings
  audio: {
    defaultSampleRate: 44100,
    defaultChannels: 2,
    defaultBitrate: '128k'
  },

  // Processing timeouts (in milliseconds)
  timeouts: {
    shortVideo: 300000,      // 5 minutes
    mediumVideo: 900000,     // 15 minutes
    longVideo: 1800000       // 30 minutes
  },

  // Project metadata template
  projectMetadata: {
    title: 'Bible Film Project',
    description: 'A film adaptation of biblical stories',
    director: '',
    producer: '',
    studio: 'Bible Film Studio',
    releaseYear: new Date().getFullYear(),
    duration: 0,
    format: 'mp4',
    resolution: 'hd'
  },

  // FFmpeg logging level
  // Options: quiet, panic, fatal, error, warning, info, verbose, debug, trace
  ffmpegLogLevel: 'info',

  // Enable progress reporting
  enableProgress: true,

  // Maximum number of concurrent FFmpeg processes
  maxConcurrentProcesses: 2
};
