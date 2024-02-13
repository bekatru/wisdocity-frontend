interface IConstructorAudioContext {
  new (contextOptions?: AudioContextOptions | undefined): AudioContext;
  prototype: AudioContext;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UniveralAudioContext = ((window as any).webkitAudioContext || window.AudioContext) as IConstructorAudioContext