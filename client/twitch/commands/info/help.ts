import { t } from "@helpers/i18n";
import type { ClientServices, CommandMeta } from "@/types";

export default {
  name: { en: "help", th: "ช่วยเหลือ" },
  description: {
    en: "View all available commands",
    th: "ดูคำสั่งทั้งหมดที่ใช้ได้",
  },
  aliases: { en: ["h", "commands", "command"], th: ["คำสั่ง"] },
  args: [
    {
      name: { en: "command", th: "คำสั่ง" },
      description: { en: "Command name", th: "ชื่อคำสั่ง" },
      required: false,
    },
  ],
  execute: async (
    client: ClientServices,
    meta: CommandMeta,
    _message: string,
    args: Array<string>,
  ) => {
    if (args.length > 0) {
      let [cmdName] = args;

      if (!cmdName) throw new Error();

      for (const command of meta.commands.values()) {
        if (
          command.name.en === cmdName ||
          command.name.th === cmdName ||
          (command.aliases?.en || []).includes(cmdName) ||
          (command.aliases?.th || []).includes(cmdName)
        ) {
          cmdName = command.name.en;
          break;
        }
      }

      const cmd = meta.commands.get(cmdName);

      if (!cmd) {
        await client.chat.say(
          meta.channel,
          `@${meta.user} ${t("info.errorCommandNotFound", meta.lang, cmdName)}`,
        );
        return;
      }
      let argsDescription = "";
      let argsAlias = "";
      if (cmd.args) {
        argsDescription = cmd.args
          .map((arg) => {
            if (arg.required) {
              return ` | <${arg.name[meta.lang]}> - ${arg.description[meta.lang]}`;
            } else {
              return ` | [${arg.name[meta.lang]}] - ${arg.description[meta.lang]}`;
            }
          })
          .join("");
      }
      if (cmd.aliases) {
        if (cmd.aliases[meta.lang]) {
          argsAlias = ` (${cmd.aliases[meta.lang].join(", ")})`;
        }
      }
      await client.chat.say(
        meta.channel,
        `📚 ${cmd.name[meta.lang]}${argsAlias}: ${cmd.description[meta.lang]}${argsDescription}`,
      );
    } else {
      await client.chat.say(
        meta.channel,
        `@${meta.user} ${t("info.help", meta.lang)}`,
      );
    }
  },
};
