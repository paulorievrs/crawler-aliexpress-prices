import { CrawlerService } from './Services/CrawlerService/Crawler.service';
require('dotenv').config();

const crawlerService = new CrawlerService();

(async () => {
  await crawlerService.crawl();
})();