import { DiscordHookService, Embed } from './../DiscordHookService/DiscordHook.service';
import * as puppeteer from 'puppeteer';

export class CrawlerService {
  private urls: string[] = [
    `https://pt.aliexpress.com/item/1005002605031679.html?spm=a2g0o.order_list.order_list_main.25.21efcaa4BDribD&gatewayAdapt=glo2bra`,
  ];

  private discordHookService: DiscordHookService;

  constructor() {
    this.discordHookService = new DiscordHookService();
  }

  public async crawl() {
   
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    });

    const embeds: Embed[] = [];

    for await (const url of this.urls) {
  
      const page = await browser.newPage();
      
      await page.goto(url);

      const price = await page.waitForSelector(`.product-price-value`);

      const title = await page.waitForSelector(`.product-title-text`);
  
  
      if(price && title) {
        const priceText = await price.evaluate((node) => node.textContent);
        const titleText = await title.evaluate((node) => node.textContent);

        const embed: Embed = {
          title: titleText,
          description: `Preço: ${priceText}`,
        };

        embeds.push(embed);
      }
      
    }

    browser.close();

    this.discordHookService.send(`ALIEXPRESS PREÇOS!!`, embeds);
  }
 
}
