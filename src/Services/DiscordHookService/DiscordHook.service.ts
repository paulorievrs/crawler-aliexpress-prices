import fetch, { Response } from 'node-fetch';

export type Embed = {
  title: string;
  description: string;
  color?: string;
}

export class DiscordHookService {
  private url: string = `https://discord.com/api/webhooks/${process.env.DISCORD_WEBHOOK_TOKEN}`;
  

  public async send(contentMessage: string, embeds: Embed[]) {
    console.log('Seding hook to: ' + this.url);
    console.log(`Enviando embeds: ${JSON.stringify(embeds)}`);

    const response: Response = await fetch(this.url, {
      method: `POST`,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: `@everyone ${contentMessage}`,
        embeds: embeds.map(embed => {
          return {
              title: embed.title,
              description: embed.description,
              color: embed?.color || '7506394',
          }
        }),
      }),
    });

    return response;
  }
 
}