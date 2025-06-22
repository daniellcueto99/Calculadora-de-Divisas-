import Head from 'next/head';
import CalculadoraDivisas from '../src/CalculadoraDivisas';

export default function Home() {
  return (
    <>
      <Head>
        <title>Calculadora de Divisas</title>
      </Head>
      <main>
        <CalculadoraDivisas />
      </main>
    </>
  );
}