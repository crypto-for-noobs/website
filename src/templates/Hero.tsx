import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/crypto-for-noobs">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern guide on Crrptocurrency for everyone\n'}
            <span className="text-primary-500">Crypto4noobs</span>
          </>
        }
        description="We will be comming soon"
        button={
          <Link href="/">
            <a>
              <Button xl>Under Construction</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
