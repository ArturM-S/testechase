/* eslint-disable no-await-in-loop */
import { NextApiRequest, NextApiResponse } from 'next';
// import { query as q } from 'faunadb';
import puppeteer, { Page, Browser } from 'puppeteer';
// import fs from 'fs';
// import { fauna } from '../../services/fauna';

// type search = {
//   data: {
//     value: string;
//   };
// };

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Allow', 'POST');

  if (req.method === 'POST') {
    // const { value } = req.body;

    // if (!value) {
    //   res.status(400).json({ error: 'Value is required' });
    //   return;
    // }
    // const data: search = await fauna.query<search>(
    //   q.Create(q.Collection('search'), { data: { value } }),
    // );

    const browser: Browser = await puppeteer.launch({
      executablePath:
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      headless: false,
    });
    const page: Page = await browser.newPage();
    await page.goto(
      `https://portaldatransparencia.gov.br/pessoa-juridica/busca/lista?termo=farmacia&pagina=1&tamanhoPagina=10&ufPessoaJuridica=ES&municipio=3205309&`,
    );

    await page.evaluate(async () => {
      await new Promise<Promise<unknown> | void>((resolve, reject) => {
        let totalHeight = 0;
        const distance = 200;
        const timer = setInterval(() => {
          const { scrollHeight } = document.body;
          window.scrollBy(0, 10);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 200);
      });
    });

    res.status(200).json({ message: 'foi' });
  }

  res.status(200).json({ message: 'funcionoou' });
};
