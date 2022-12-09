import { CrawlerService } from './Services/CrawlerService/Crawler.service';
require('dotenv').config();

import cron from 'node-cron';

cron.schedule('0 1 * * *', () => {
  const crawlerService = new CrawlerService();

  (async () => {
    await crawlerService.crawl();
  })();
}, {
  scheduled: true,
  timezone: "America/Sao_Paulo"
});

