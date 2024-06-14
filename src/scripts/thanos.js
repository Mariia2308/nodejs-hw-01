import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const thanos = async () => {
  try {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    
    contacts = contacts.filter(() => Math.random() >= 0.5);

    
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log(`Танос застосував свій щигель. Залишилось ${contacts.length} контактів.`);
  } catch (error) {
    console.error('Помилка:', error);
  }
};

await thanos();
