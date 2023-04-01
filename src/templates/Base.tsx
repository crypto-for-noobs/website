import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Hero } from './Hero';

const Base = () => (
  <div className="text-white h-screen">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
  </div>
);

export { Base };
