  declare module 'react-helmet' {
      import { Component } from 'react';

      export interface HelmetProps {
          title?: string;
          titleTemplate?: string;
          defaultTitle?: string;
          meta?: Array<{ name?: string; content?: string }>;
          link?: Array<{ rel?: string; href?: string }>;
          script?: Array<{ src?: string; async?: boolean; defer?: boolean }>;
          // adicione outras propriedades conforme necessário
      }

      export class Helmet extends Component<HelmetProps> {}
      export default Helmet;
  }
  