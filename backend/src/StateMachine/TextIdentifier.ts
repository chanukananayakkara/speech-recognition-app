export default class TextIdentifier {
  static greetings: string[] = [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
    "how are you?",
    "hay!",
    "greetings",
    "what's up?",
  ];
  private static normalizeTranscript(transcript: string): string {
    return transcript.toLowerCase().trim();
  }

  static isGreetings(transcript: string): boolean {
    const normalText = this.normalizeTranscript(transcript);
    return this.greetings.some((greeting) => normalText === greeting);
  }
}
