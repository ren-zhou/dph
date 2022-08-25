const suffixes = ['tastic', 'ular', 'acious', 'ic', 'some', 'ful', 'ish', 'ous']

export function dsuffix(): string {
    return suffixes[Math.floor(Math.random() * suffixes.length)];
}