export interface ChartSummary {
  title?: {
    enable: boolean;
    text: string;
  };
  subtitle?: {
    enable: boolean;
    text: string;
  };
  caption?: {
    enable: boolean;
    text: string;
  };
}

export const SAMPLE_CHART_SUMMARY: ChartSummary = {
  title: { enable: true, text: 'Chart Title Title' },
  subtitle: {
    enable: true,
    text:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolore quasi voluptatum, obcaecati voluptate temporibus alias vitae similique culpa eius fugiat maxime pariatur tempora expedita. Assumenda necessitatibus nisi quia dolorem.',
  },
  caption: { enable: true, text: 'Figure 1. Write Your Caption text.' },
};
