
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const from = require('from')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const xfarr = require('xfarr-api')
const maker = require('mumaker')
const FormData = require('form-data')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ttdown = require('./lib/tt')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash } = require('./lib/myfunc')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')

const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')

const { TelegraPh } = require ('./lib/uploader')
const hit = JSON.parse(fs.readFileSync('./lib/db/dash.json'))

//anu
const { color } = require("./lib/color")

//db json
const ban = JSON.parse(fs.readFileSync('./lib/db/ban.json'))
const afk = JSON.parse(fs.readFileSync('./lib/db/afk.json'))
const game = JSON.parse(fs.readFileSync('./lib/db/game.json'))
const cmdmedia = JSON.parse(fs.readFileSync('./lib/db/cmd.json'))
const users = JSON.parse(fs.readFileSync('./lib/db/user.json'))
const email = JSON.parse(fs.readFileSync('./lib/db/email.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/db/respon.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
logo1 = fs.readFileSync('./lib/assets/logo.jpg')
//bgst
butong1 = [{   
    quickReplyButton: {
        displayText: 'BACK TO MENU',
        id: 'menu'
    }  
 }, {
    quickReplyButton: {
        displayText: 'SUPORT BOT',
        id: 'donasi'
 }
                                
 }]
//random
serial = generateHash(20)

// Database Game
const kuismath = game.math = []
const _family100 = game.family100 = []
const tebakkata = game.tebakkata = []
const tebakbendera = game.tebakbendera = []
const siapaaku = game.siapaaku = []
const tebakkalimat = game.tebakkalimat = []
const caklontong = game.caklontong = []
const susunkata = game.susunkata = []
const tekateki = game.tekateki = []
const tebakkabupaten = game.tebakkabupaten = []
const tebakkimia = game.tebakkimia = []
const tebaklirik = game.tebaklirik = []
const tebaktebakan = game.tebaktebakan = []


// Start
module.exports = kurr = async (kurr, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = kurr.user.id ? kurr.user.id.split(":")[0]+"@s.whatsapp.net" : kurr.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const arg = budy.slice(command.length + 2, budy.length)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    const isNumber = x => typeof x === 'number' && !isNaN(x)
	    
        // Group
        const isGroup = m.chat.endsWith('@g.us')
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const groupMetadata = m.isGroup ? await kurr.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
        //Antilink Nya By KahfzXzy
	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               m.reply('*L I N K  T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink yak..,\nGood Bye Untukmu..👋🏻')
               let sianj = m.sender
               await kurr.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               }
	  }
        // respon
        for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					m.reply(commandsDB[i].balasan)
				}
			}
        //TIME
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date
    let hari = o.toLocaleDateString(locale, { weekday: 'long' })
    let yoi = o.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
        // Public & Self
        if (!kurr.public) {
            if (!m.key.fromMe) return
        }
        /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    kurr.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: kurr.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            kurr.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        // TextTeplate 
   
        const textTemplateButtons = (from, text, footer, buttons) => {
            return kurr.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await kurr.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }
        
        const adduser = (sender, pushname) => {
            const obj = { id: sender, name: pushname, }
            users.push(obj)
            fs.writeFileSync('./lib/db/user.json', JSON.stringify(users))
        }
        const cekuser = (sender) => {
            let status = false
            Object.keys(users).forEach((i) => {
                if (users[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isUser = cekuser(sender)
        
        const addmail = (text) => {
            const obj = { email: text, }
            email.push(obj)
            fs.writeFileSync('./lib/db/email.json', JSON.stringify(email))
        }
        const cekmail = (text) => {
            let status = false
            Object.keys(email).forEach((i) => {
                if (email[i].email === text) {
                    status = true
                }
            })
            return status
        }
        const checkEmail = cekmail(text)
        
        // Database
        try {
let users = afk[m.sender]
if (typeof users !== 'object') afk[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else afk[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
} catch (err) {
console.log(err)
}
//afk
	for (let jid of mentionUser) {
let user = afk[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
`.trim())
}

if (afk[m.sender].afkTime > -1) {
let user = afk[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
`.trim())
user.afkTime = -1
user.afkReason = ''

}

        // Push Message To Console
        
        kurr.sendReadReceipt(m.chat, m.sender, [m.key.id])
        kurr.sendPresenceUpdate('composing', m.chat)
        if (isCmd && !isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        // Func dashboard
        let words = ["menu","owner","ytmp3","ytmp4","tiktok","s","sticker","dash","help","toimg","anonymous","dashboard","anonymous","start","leave","tiktok","yt","ttaud","ttvid","tahta","nulis","pinterest"]

if (isCmd && !m.isBaileys) {
try {
hitp = words.filter(suu => suu === command)
if (hitp[0] === command) {
hit.push({ sender: m.sender, cmd: command })
fs.writeFileSync('./lib/db/dash.json', JSON.stringify(hit))
}
} catch(err) {
console.log(err)
}

      }
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kurr.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kurr.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kurr.ev.emit('messages.upsert', msg)
        }
	    
	if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (('family100'+m.chat in _family100) && isCmd) {
	    kuis = true
	    let room = _family100['family100'+m.chat]
	    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
	    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
	    if (!isSurender) {
	        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
	        if (room.terjawab[index]) return !0
		room.terjawab[index] = m.sender
	    }
	    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
	return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}

${isSurender ? '' : ``}`.trim()
	    kurr.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
	    if (isWin || isSurender) delete _family100['family100'+m.chat]
	}
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`)
                delete siapaaku[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        switch(command) {
        case 'afk': {
		let user = afk[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`
${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
	    }
	    break
	    
        case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./plugins/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                kurr.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'family100': {
	        if ('family100'+m.chat in _family100) {
		m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
		    throw false
	        }
	        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
		let random = anu[Math.floor(Math.random() * anu.length)]
	        let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
		    _family100['family100'+m.chat] = {
		    id: 'family100'+m.chat,
		     pesan: await kurr.sendText(m.chat, hasil, m),
		    ...random,
		    terjawab: Array.from(random.jawaban, () => false),
	            hadiah: 6,
		}
	    }
            break
            case 'tebak': {
                if (!text) throw `Option:\n1. kata\n2. bendera\n3. kalimat\n4. Siapa\n5. tebakan\n6. lirik\n7. kimia\n\nExample: tebak kalimat`
                
                  if (args[0] === 'kata') {
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebakkata[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'bendera') {
                      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendFile(m.chat, result.img, '', `Silahkan Jawab Pertanyaan Diatas\n\nCode : ${result.flag}\nWaktu : 60s`, m).then(() => {
                          tebakbendera[m.sender.split('@')[0]] = result.name.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.name)
                          m.reply("Waktu Habis\nJawaban: " + result.name)
                          delete tebakbendera[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'kalimat') {
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebakkalimat[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'siapa') {
                      if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          siapaaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (siapaaku.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete siapaaku[m.sender.split('@')[0]]
                      }
                   } else if (args[0] === 'kabupaten') {
		      if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendFile(m.chat, result.url, '', `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : 60s`, m).then(() => {
                          tebakkabupaten[m.sender.split('@')[0]] = result.title.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.title)
                          m.reply("Waktu Habis\nJawaban: " + result.title)
                          delete tebakkabupaten[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'kimia') {
		      if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Apa Arti Dari Simbol : *${result.lambang}*?\nWaktu : 60s`, m).then(() => {
                          tebakkimia[m.sender.split('@')[0]] = result.unsur.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.unsur)
                          m.reply("Waktu Habis\nJawaban: " + result.unsur)
                          delete tebakkimia[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'lirik') {
		      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                          tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebaklirik[m.sender.split('@')[0]]
                      }
		   } else if (args[0] === 'tebakan') {
                      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
                      let result = anu[Math.floor(Math.random() * anu.length)]
                      kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                          tebaktebakan[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                      })
                      await sleep(60000)
                      if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
                          console.log("Jawaban: " + result.jawaban)
                          m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                          delete tebaktebakan[m.sender.split('@')[0]]
                      }
                   }
              }
              break
              case 'dashboard': case 'dash': case 'Dash':{
hit_global = []
hit_user = []
filt_global = hit.map(res => res.cmd)
nar_global = new Set(filt_global);
cmd_global = [...nar_global]
for(let i of cmd_global){
try{
filtc_global = await hit.filter(hcm => hcm.cmd === i)
hit_global.push({
cmd: i,
hit: filtc_global.length
})
}catch{
}
}
hglobal = hit_global.sort(function(a, b){return b.hit - a.hit})
dhit_user = await hit.filter(hcm => hcm.sender === sender)
filt_user = dhit_user.map(res => res.cmd)
nar_user = new Set(filt_user);
cmd_user = [...nar_user]
for(let i of cmd_user){
try{
filtc_user = await dhit_user.filter(hcm => hcm.cmd === i)
hit_user.push({
cmd: i,
hit: filtc_user.length
})
}catch{
}
}
huser = hit_user.sort(function(a, b){return b.hit - a.hit})
tg = ''
for(let i=0; i<5; i++){
tg += `• ${prefix}${hglobal[i].cmd} : ${hglobal[i].hit}\n`
}
tu = ''
if(huser.length < 5){
for(let i=0; i<huser.length; i++){
tu += `• ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
}
}else{
for(let i=0; i<5; i++){
tu += `• ${prefix}${huser[i].cmd} : ${huser[i].hit}\n`
}
}
var dash = `DASHBOARD T R A S H
${tg}`
m.reply(dash)
}
break
            case 'caklontong': {
                if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                kurr.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}\nDeskripsi : ${result.deskripsi}`)
                    delete caklontong[m.sender.split('@')[0]]
                }
            }
            break
            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas': case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike': case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker': case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             	if (!text) throw `Example : ${prefix + command} kurr`
             	m.reply(`SABAR YAAAA....`)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, [text])
                kurr.sendMessage(m.chat, { image: { url: anu }, caption: 'Textpro Scraper By kurrxd' }, { quoted: m })
             }
             break
case 'tes':
kurr.sendText(`${sender}`, `Tester`, m)
break
case 'otp':
if (checkEmail) return m.reply('sudah ada email')
m.reply(`Email verif telah di kirim silahkan buka mail box anda`)
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
  const token = trut[Math.floor(Math.random() * trut.length)]
jans = require('./lib/mail.js')
ok = await jans.mail(text, token);
addmail(text);
break
case 'ppuser': {
                    let PhoneNumber = require('awesome-phonenumber')
                    try {
                        ppuser = await kurr.profilePictureUrl(who, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    let about = (await kurr.fetchStatus(sender).catch(console.error) || {}).status || ''
                    let str = `
⭔ Name : ${pushname}
⭔ Link : https://wa.me/${sender.split`@`[0]}
⭔ Registered : ${isUser ? 'Yes (' + new Date(regTime) + ')': 'No'}
`.trim()
                    kurr.sendMessage(m.chat, { image: { url: ppuser }, caption: str }, { quoted: m })
                }
                break

             //ephoto
             case '3d': case 'window': case 'signature': case 'galaxynimw': case 'avatar': case 'onepiece': case 'boom': case 'anonymous': {// 1 text with radio
			
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} kurrxd`)
                    m.reply(`SABAR YAAAA....`)
					let link
					let radioo
				    if (/anonymous/.test(command)) link = 'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html', radioo = ['984dd03e-220d-4335-a6ba-7ac56b092240','71074346-5cb3-4b7d-9b8b-a84e4f142ba4','88bacc38-e755-450a-bbc1-f5671d77c8a7']
					if (/3d/.test(command)) link = 'https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html', radioo = ['783ab148-70af-40b4-a0e0-6dd837ae6e8b','f0285f0d-a8a7-41c2-b956-a0d372003026','222969f0-a2e0-4909-9629-193e51befbd8','1743f0c3-ce47-4792-a6a8-d65aa24b9021','84a61ecf-125c-450f-8c88-8356e9b35065','f5efa9cb-55ec-4eb9-8705-0b9a9103e5df']
					if (/window/.test(command)) link = 'https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', radioo = ['2d6f1ad1-39df-4175-9faa-9348b6ba1551','86e55647-2fc7-4b20-ae13-7dfc740af209','22cdd4a3-f144-4f8d-b46f-093b0c1ec0d2','fb6983d2-3bc1-46b5-bb61-00cff1bffbf7','33be5625-d82c-4bd5-97ed-57324fd90a70','50eb6949-e5a5-4feb-95ce-8ca749159ee7']
					if (/signature/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html', radioo = ['7647ec5b-f47c-4dab-91b6-db3afef6c980','aa66248c-328c-447f-8862-ef49e1a73bc0','6bf8fced-bb7f-4373-ad07-5e95fd30e10e','3938db27-c48c-4d96-ab60-f1bd1e312abf','a35d8b0d-bb89-4718-8723-71c5a9e9de4a','188eb364-5a04-446e-a779-0e2f427b7bc3']
					if (/galaxynime/.test(command)) link = 'https://en.ephoto360.com/create-a-beautiful-galaxy-cover-lol-344.html', radioo = ['0333f7bc-b275-43da-ab34-b6bd550bc9f7','adc92b8e-1bc7-46b1-9f24-69054a5b59d3','7a951e7b-7881-4abe-ad1d-b1d4a81fc67a','577522b2-7047-448c-8306-7f441cb744d4','a074b12c-409a-428f-8349-2f02eac01587','1a65b9cc-cd6b-4730-b763-0d9196e35725']
					if (/avatar/.test(command)) link = 'https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html', radioo = ['a4f1f582-9cf1-4826-8d6f-f82682935696','70bf3a9e-45b4-40e5-8551-8d968cec0f9f','e2d9795e-f612-4eb8-b6eb-9efa73f4ede1','dc745ea0-e01d-4c69-97c0-6b066d5741d5','2747f827-2ff8-42af-8d56-e40aac303c9e']
					if (/onepiece/.test(command)) link = 'https://en.ephoto360.com/create-one-piece-facebook-cover-online-553.html', radioo = ['cd754453-c633-426f-b74f-1ad234d68c73','4aca8b82-95fc-4f76-aec4-3dfd35f8643d','6616f94c-c11b-46d7-acf5-591f85058fd6','d0f94685-22c2-4b98-99bd-feb137bcda62','7f88a9d5-289b-449d-a111-82f3b4bd4546','54bba753-cddc-4639-8e73-e9c02a653e17','1e67a77b-fcd2-4539-a036-0a6a65a806d2','value="94e59201-debe-43ce-b2fd-bdd2d1eec6de','1afe8173-5bd8-4714-bba0-7a428caa4f83','fefa0a48-add6-4b05-b7e0-e02154fe4ed0','b1bc2ec1-a814-4047-97e5-fd54546c139f','6087dba4-4494-4b8c-98fb-e9ded5ecb004','bf1e9072-3c40-49aa-8fa2-02b3cc2a59ef','ffe89d47-f34d-4d20-b5a2-ac17e015f78f','eed28fbf-3895-46cb-8c52-960a78c14860','454cff9d-4736-465a-a823-0c7d0dbee2f2','e77083fb-8f62-4619-b9ae-7435ca71e467','0fa46b0b-02f8-4802-a0aa-206d54022f10']
					if (/boom/.test(command)) link = 'https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html', radioo = ['f36541e4-27fa-440c-8314-3b3c1b6feddc','3d8588cf-d870-4840-b633-5d5be31ce07c','bdf06259-64f0-49bb-9d30-7f824622bb7a','1bb11477-d977-4d44-a7b9-e23495cd6358','acf1aaf7-19f5-45c3-addd-75d760e65cc2','c6154cc4-270a-4f52-a4cf-6cff63d549ae']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q], radio)
             kurr.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Ephoto Scraper By kurrxd' }, { quoted: m })
            }
            break
				case 'mascot': case 'glitter': { // 2 text with radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} kurr|bot`) 
                    m.reply(`SABAR YAAAA....`)
					let link
					let radioo
				    if (/mascot/.test(command)) link = 'https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html', radioo = ['f26629d6-5b3d-4702-beba-542a2d9f7439','9a9ccc88-62b3-4209-86c1-19798c8e9760','2b86e5cb-9254-4078-baeb-6fdc1b76632a','6d88da4a-acd4-4fe6-9d23-7ca4803ade26','09feee25-257e-4e85-b4c6-70e3cc62d9a6','1f926df3-b06e-44fa-9d9b-63cceb638ba1','5a0c8152-cade-453e-94d3-f69bf29796d4','2f7d1db5-3ff3-4c96-95eb-d5d849aa1b43','62023478-a77d-42dd-8238-e9cad3945a6f','2d9ad953-64a0-4b8f-86f3-8a0501b08510','1d075d9f-15d8-4300-95d1-56f02b532f41','77f5b478-d7df-4443-94dc-c8be71ee1049','22e895fe-288d-4d30-b63e-c1eb0de09271','b0242aa8-adaa-4367-a660-8ed466bd6670','829e5eab-721f-42a0-8d08-f75c83411f54','bgkscskmt','gu3nvozkw','s5uvb3ngt','51jlkc2ug','zvwk9kkc8','zm9etfup0','zknqqnnd1','h2hkigv6i','m6zosmq4g']
					if (/glitter/.test(command)) link = 'https://en.ephoto360.com/free-glitter-text-effect-maker-online-656.html', radioo = ['9a0f8a8a-d4b0-42bf-945f-06e75a2ac6a4','bf5c590b-27c0-4f12-986c-f2758674d97b','450adc52-33aa-4519-b921-9c814ae0f275','1ad3c6ed-ba1e-4582-95cf-b5e2d7d1a125','83d9bd14-0ebe-470b-a2c7-bdda4f37ef17','155f67da-bf57-42e4-a3a8-5f1825b65b7e']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q.split('|')[0], q.split('|')[1]], radio)
					kurr.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By kurrxd' }, { quoted: m })
				}
				break
				case 'valorant': { // 3 text with radio
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} kurr|bot|kurrxd`)
                    m.reply(`SABAR YAAAA....`)
					let link
					let radioo
				    if (/valorant/.test(command)) link = 'https://en.ephoto360.com/create-valorant-banner-youtube-online-588.html', radioo = ['072dd1a0-db7d-4b87-b3e7-b142c2e8cad6','784a10c2-660e-4955-901a-a1b57881df42','00251bca-e044-42bd-8dd7-f536ac0c42b4','882898c0-054d-4dce-b08a-823af1f4cfc7','4f51675f-4ad4-42a4-ad1e-1eb8792dfad6','90d9209e-0739-4079-81f7-959fd12f3bbe','dbd319cf-a529-4958-b43e-7f2e19f05853','71b52833-5560-46b4-ac88-92054c6d1f5a','acc7c093-9937-4a3d-85da-d66c02c92751','48ab2129-3543-4fa9-9361-2868fab8f073']
					radio = radioo[Math.floor(Math.random() * radioo.length)]
					anu = await maker.ephoto4(link, [q.split('|')[0], q.split('|')[1], q.split('|')[2]], radio)
					kurr.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By kurrxd' }, { quoted: m })
				}
				break
				case 'sand': case 'whitesand': case 'goldbanner': case 'goldsand': case 'neon': case 'glassrain': case 'hallowen': case 'hallowen3': case 'underwater': case 'cutegravity': case 'papercolor': case 'cloud': case 'snow': case 'birthday': { // 1 text no radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} kurrxd`) 
                    m.reply(`SABAR YAAAA....`)
					let link
				    if (/neon/.test(command)) link = 'https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html'
					if (/glassrain/.test(command)) link = 'https://en.ephoto360.com/foggy-rainy-text-effect-75.html'
					if (/hallowen/.test(command)) link = 'https://en.ephoto360.com/halloween-fire-text-online-83.html'
					if (/hallowen2/.test(command)) link = 'https://en.ephoto360.com/halloween-fire-text-effect-online-369.html'
					if (/underwater/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
					if (/cutegravity/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
					if (/papercolor/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
					if (/watercolor/.test(command)) link = 'https://en.ephoto360.com/graffiti-color-199.html'
					if (/cloud/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
					if (/snow/.test(command)) link = 'https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html'
					if (/birthday/.test(command)) link = 'https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html'
					if (/goldsand/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
					if (/goldbanner/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
					if (/whitesand/.test(command)) link = 'https://en.ephoto360.com/create-a-summery-sand-writing-text-effect-577.html'
					if (/sand/.test(command)) link = 'https://en.ephoto360.com/realistic-3d-sand-text-effect-online-580.html'
					anu = await maker.ephoto3(link, [q])
					kurr.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Textpro Scraper By kurrxd' }, { quoted: m })
				}
				break
				case 'gravity': case 'wallgravity': case 'tipografi': case 'light': case 'pornhub': { // 2 text no radio
				
                    if (args.length == 0) return m.reply(`Example: ${prefix + command} kurr|bot`) 
                    m.reply(`SABAR YAAAA....`)
					let link
				    if (/gravity/.test(command)) link = 'https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html'
					if (/wallgravity/.test(command)) link = 'https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html'
					if (/tipografi/.test(command)) link = 'https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html'
					if (/light/.test(command)) link = 'https://en.ephoto360.com/create-realistic-vintage-3d-light-bulb-608.html'
					if (/pornhub/.test(command)) link = 'https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html'
					anu = await maker.ephoto3(link, [q.split("|")[0], q.split("|")[1]])
					kurr.sendMessage(m.chat, { image: { url: 'https://e1.yotools.net'+`${anu.image}` }, caption: 'Ephoto Scraper By kurrxd' }, { quoted: m })
				}
				break
				case 'ballon':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} kurr`
             	m.reply(`SABAR YAAAA....`)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/balloon')
					kurr.sendImage(m.chat, anu, 'nih jadi', m)
					break
					case 'pantaii':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} kurr`
             	m.reply(`SABAR YAAAA....`)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/beach-sign')
					kurr.sendImage(m.chat, anu, 'nih jadi', m)
					break
					case 'passir':
				 photofunia = require('./lib/photofunia.js')
					if (!text) throw `Example : ${prefix + command} kurr`
             	m.reply(`SABAR YAAAA....`)
                    
                    anu = await photofunia.use(`${text}`,'https://m.photofunia.com/categories/all_effects/sand_writing')
					kurr.sendImage(m.chat, anu, 'nih jadi', m)
					break
            case 'susunkata': {
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                kurr.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`, m).then(() => {
                    susunkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}`)
                    delete susunkata[m.sender.split('@')[0]]
                }
            }
            break
            case 'inews':
            a = await xfarr.INews()
result = await a.map(v => {
return `*• Berita :* ${v.berita}\n*• Upload :* ${v.upload_time}\n*• Link :* ${v.link}\n*• Thumb :* ${v.thumbnail}\n*• Info :* ${v.info_berita}`
}).join`\n\n`
kurr.sendMessage(m.chat, { image: { url: a[0].thumbnail }, caption: `${result}` }, { quoted: m})
break
             break
            
             case 'felisa':
             m.reply(`SABAR YAAAA....`)
lahh = await fetchText(`http://www.ojansenpai.ga/felisa.txt`)
lah = lahh.split("\n")
huh = lah[Math.floor(Math.random() * lah.length)]
kurr.sendMessage(m.chat, { video: { url: huh }, caption: `NIH BANG GAUSH TRIMAKASIH` }, { quoted: m})
console.log('Wait send video')
             break
             case 'asupan':
             m.reply(`SABAR YAAAA....`)
lahh = await fetchText(`https://asupan.kamikazekun.repl.co/asupan.txt`)
lah = lahh.split("\n")
huh = lah[Math.floor(Math.random() * lah.length)]
kurr.sendMessage(m.chat, { video: { url: huh }, caption: `NIH BANG GAUSH TRIMAKASIH` }, { quoted: m})
console.log('Wait send video')
             break
             
case 'fetch': case 'get': {
			try {
			if (!/^https?:\/\//.test(text)) return m.reply('Awali URL dengan http:// atau https://')
			let res = await fetch(isUrl(text)[0])
			if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
				delete res
				throw `Content-Length: ${res.headers.get('content-length')}`
			}
			if (!/text|json/.test(res.headers.get('content-type'))) return kurr.sendFile(m.chat, isUrl(text)[0], 'file', '', m)
			txtx = await res.buffer()
			try {
				txtx = util.format(JSON.parse(txtx+''))
			} catch (e) {
				txtx = txtx + ''
			} finally {
				m.reply(txtx.slice(0, 65536) + '')
			}
			} catch(err) {
				return m.reply(err)
			}
		}
		break
             //anime
             case 'miku':
             m.reply(`SABAR YAAAA....`)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/miku.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
             break
             case 'hinata':
             m.reply(`SABAR YAAAA....`)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/hinata.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
             break
             case 'loli':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/loli.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
             case 'nezuko':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/TRASH.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
             case 'kakasih':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/kakasih.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break  
             case 'sasuke':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/sasuke.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
 
        case 'nulis':
                        if (!text) throw m.reply(`TEXT NYA ???`)
                    m.reply(`OTW TULIS BOSS`)
kon = (`https://melcanz.com/nuliskiri?text=${text}&apikey=melcantik`)
anu = await getBuffer(kon)
kurr.sendMessage(m.chat, { image: anu, caption: `© MAGER-NULIS BY TRASH` }, { quoted: m})
break
               
             case 'itachi':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/itachi.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
             case 'elaina':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/elaina.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
                case 'asuna':
                    m.reply(`SABAR YAAAA....`)
                    lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/asuna.json')
                    random = lahh[Math.floor(Math.random() * lahh.length)]
                    kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                    break
                case 'neko':
                    m.reply(`SABAR YAAAA....`)
                    lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/neko.json')
                    random = lahh[Math.floor(Math.random() * lahh.length)]
                    kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                    break
                case 'waifu':
                    m.reply(`SABAR YAAAA....`)
                    lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/waifu.json')
                    random = lahh[Math.floor(Math.random() * lahh.length)]
                    kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                    break
             case 'sagiri':
             m.reply(`SABAR YAAAA....`)
             lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/sagiri.json')
             random = lahh[Math.floor(Math.random() * lahh.length)]
             kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
             break
             case 'mikasa':
                m.reply(`SABAR YAAAA....`)
                lahh = await fetchJson('https://raw.githubusercontent.com/FznXSec404/result-rest-api/main/random%20anime/mikasa.json')
                random = lahh[Math.floor(Math.random() * lahh.length)]
                kurr.sendMessage(m.chat, { image: { url: random }, caption: `© T R A S H - B O T` }, { quoted: m})
                break
            case 'tekateki': {
                if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                let result = anu[Math.floor(Math.random() * anu.length)]
                kurr.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tekateki[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                })
                await sleep(60000)
                if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban : ${result.jawaban}`)
                    delete tekateki[m.sender.split('@')[0]]
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await kurr.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://kurrarridho.my.id/database/games/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await kurr.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    kurr.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lagu`, `Tebak Lagu`, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kurr.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak gambar`, `Tebak Gambar`, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak kata`, `Tebak Kata`, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kurr.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak kalimat`, `Tebak Kalimat`, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kurr.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lirik`, `Tebak Lirik`, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    kurr.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    kurr.send1ButMes(m.chat, `Waktu Habis\nJawaban: ${result.jawaban}\nDeskripsi : ${result.deskripsi}\n\nIngin bermain lagi? tekan button dibawah`, `© ${ownername}`, `${prefix}tebak lontong`, `Tebak Lontong`, m)
                    delete caklontong[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./plugins/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                kurr.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + result.jawaban)
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'voice':
            m.reply(`[ List Voice Changer ]\n1. Bass\n2. blown\n3. deep\n4. earrape\n5. fast\n6. fat\n7. nightcore\n8. reverse\n9. robot\n10. slow\n11. smooth\n12.tupai\n\nCara menggunakan nya: Reply audio/vn yang mau di jadiikan voice changer\nExample: bass <audio>`)
            break
            //Voice Changer
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio|video/.test(mime)) {
m.reply(`SABAR YAAAA....`)
let media = await kurr.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
kurr.sendMessage(m.chat, {audio: buff, ptt: true, mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio/video yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'ban': case 'banned': {
			if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = true
			m.reply('Sukse Membanned '+who)
		}
		break
		case 'unban': case 'unbanned': {
			if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
			let who
			if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
			else who = m.chat
			if (!who) throw 'Tag User'
			ban[who] = false
			m.reply('Sukses Unban '+who)
		}
		break
            case 'jodohku': {
            if (!m.isGroup) throw  m.reply(`Khusus Group`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Jodoh mu adalah:\n @${me.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            kurr.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw  m.reply(`Khusus Group`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = ` Cieee Yang jadian si @${orang.split('@')[0]} ❤ @${jodoh.split('@')[0]}`
            let ments = [orang, jodoh]
            kurr.sendTextWithMentions(m.chat, jawab, m)
            }
            break
            case 'join': {
                if (!isCreator) throw  'khusus owner'
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(`SABAR YAAAA....`)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kurr.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                await kurr.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': case 'tendang': {
		if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'antilink':
    if (!m.isGroup) throw  m.reply(`Khusus Group`)
    if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
    if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
					if (args[0] === 'on') {
						if (isAntiLink) return m.reply('Sudah Aktif Kak')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Sukses mengaktifkan fitur antilink')
						kurr.sendMessage(m.chat,  {text: `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return m.reply('Sudah Mati Kak')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						m.reply('Sukses menonaktifkan fitur antilink')
					} else if (!q){
 m.reply(`Pilih Antilink On / Off `)
					}
					break 
	case 'add': {
		if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
    case 'tagall': {
        if (!m.isGroup) throw  m.reply(`Khusus Group`)
        if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
        if (!isGroupAdmins && !isGroupOwner) throw  m.reply(`Khusus Admin`)
let teks = `Tag all\n`
        for (let mem of participants) {
        teks += `› @${mem.id.split('@')[0]}\n`
        }
        kurr.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
        }
        break
    case 'taginfo': {
   
        if (!text) throw `Text mana?\n\nExample : ${prefix + command} infone masseh`
        if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins && !isGroupOwner) throw  m.reply(`Khusus Admin`)
let teks = `DARI ADMIN

INFO : ${text}
\n`
                for (let mem of participants) {
                teks += `› @${mem.id.split('@')[0]}\n`
                }
                kurr.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
      case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply(`SABAR YAAAA....`)
mee = await kurr.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await kurr.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
//canvas
case 'ngetes':
if (!/image/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(`SABAR YAAAA....`)
mee = await kurr.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
ok = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/discordblue?url=${mem}`)
kurr.sendMedia(m.chat, ok, '', m, { caption: 'ok' })
break

                case 'hidetag': {
if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)

            kurr.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
                if (!text) throw 'Text ?'
                await kurr.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
           
            case 'group': case 'grup': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                if (!isBotAdmins) throw  m.reply(`Adminin dlu bjir`)
                if (!isGroupAdmins) throw  m.reply(`Khusus Admin`)
                if (args[0] === 'close') {
                    await kurr.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await kurr.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                m.reply('OPEN? CLOSE?')
            }
            }
            break
            
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                let response = await kurr.groupInviteCode(m.chat)
                kurr.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kurr.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
           

            case 'bcimg': case 'bcvidio': case 'bcaudio': {
                oka = `PESAN SIARAN`
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`
                let getGroups = await kurr.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                 
                        quickReplyButton: {
                            displayText: 'NO OWNER',
                            id: 'owner'
                        }
                    
                            }]
                    let media = await kurr.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    kurr.sendMessage(i, { sticker: { url: media } }, { quoted: fkontak })
                    } else if (/image/.test(mime)) {
                    let junn = `${text}\n\n-PESAN SIARAN`
                    kurr.send5ButImg(i, junn, `TRASH`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `${text}\n\n-PESAN SIARAN`
                    kurr.send5Vid(i, junn, `TRASH`, buffer, butoon)
                    } else if (/audio/.test(mime)) {
                    kurr.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : m })
                    } else {
                    m.reply(`Kirim/Reply Video/Audio/Image Yang Ingin Di Broadcast Dengan Caption ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcgc': 
            case 'bcgrup': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                let getGroups = await kurr.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu =  groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                quickReplyButton: {
                    displayText: 'NO OWNER',
                    id: 'owner'
                }
            
                    
                            }]
                        let txt = `${text}\n\n-PESAN SIARAN`
                      textTemplateButtons(yoi, txt, `Broadcast Bot TRASH`, btn)
		}
		m.reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
            case 'bc': 
            case 'bctext': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                let getGroups = await kurr.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		console.log(chalk.black(chalk.bgWhite('[ Otw Kirim Broadcast ]')))
		    let btn = [{
                quickReplyButton: {
                    displayText: 'NO OWNER',
                    id: 'owner'
                }
            
                    
                            }]
                        let txt = `${text}\n\n-PESAN SIARAN`
                      textTemplateButtons(yoi, txt, `Broadcast Bot TRASH`, btn)
		}
		m.reply('Sukses Broadcast')
		console.log(chalk.black(chalk.bgWhite('[ Succes ]')))
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `› @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━› *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} › *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                kurr.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await kurr.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `› *Nama :* ${nama}\n› *User :* @${i.split('@')[0]}\n› *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kurr.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kurr.groupMetadata(i)
                     teks += `› *Nama :* ${metadata.subject}\n› *ID :* ${metadata.id}\n› *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n› *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kurr.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), kurr.user.id]
                    kurr.sendText(m.chat, 'List Online:\n\n' + online.map(v => '› @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': case 'setiker': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await kurr.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await kurr.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
                } else if (quoted.mentionedJid) {
                    let media = await kurr.profilePictureUrl(quoted.mentionedJid[0], 'image')
                    let encmedia = await kurr.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            	    await fs.unlinkSync(encmedia)
		} else if (isUrl(args[0])) {
                    if (isUrl(args[0])) encmedia = await kurr.sendMediaAsSticker(m.chat, isUrl(text)[0], m, { packname: global.packname, author: global.author })
		    else return m.reply('URL tidak valid!')
		    await fs.unlinkSync(encmedia)
		} else if (text) {
		    let anu = await xfarr.StickerSearch(text)
                    for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
                    	let encmedia = await kurr.sendMediaAsSticker(m.chat, anu.sticker_url[i], m, { packname: packname, author: author })
                    	await fs.unlinkSync(encmedia)
                    }
                } else if (quoted.hydratedFourRowTemplate) {
            	    let result = quoted.hydratedFourRowTemplate ? quoted.hydratedFourRowTemplate.imageMessage : quoted.hydratedFourRowTemplate.videoMessage
                    let media = await m.getMsgBuffer(result)
                    let encmedia = await kurr.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
            	} else if (quoted) {
            	    let result = quoted.imageMessage || quoted.videoMessage || quoted.message.imageMessage || quoted.message.videoMessage
            	    let media = await m.getMsgBuffer(result)
            	    let encmedia = await kurr.sendMediaAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
            	    await fs.unlinkSync(encmedia)
		} else {
            	    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break
            case 'take': case 'colong': case 'swm': case 'stickerwm': case 'wm': case 'exif': {
if (!quoted) return m.reply(`Kirim/Reply media dengan caption ${prefix + command} *Nama*`)
let { writeExif } = require('./lib/exif')
let media = {}
media.mimetype = mime
media.data = await quoted.download()
let encmedia = await writeExif(media, { packname: text.split("|")[0] ? text.split("|")[0] : global.packname, author: text.split("|")[1] ? text.split("|")[1] : global.author })
kurr.sendMessage(m.chat, { sticker: { url: encmedia } }, { quoted: m })
}
break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kurr.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`SABAR YAAAA....`)
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kurr.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tomp3': case 'tesya': 
            hasilnya = 'Convert Mp4 to Mp3'
                if (!quoted) throw 'Reply Image'
                if (!/video/.test(mime)) throw `balas video dengan caption *${prefix + command}*`
                m.reply(`SABAR YAAAA....`)
               media = await kurr.downloadAndSaveMediaMessage(quoted)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return m.reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               kurr.sendMessage(m.chat, { document: buffer453 , mimetype: 'audio/mp3', fileName: `${hasilnya}.mp3` }, { quoted: m})
               fs.unlinkSync(ran)
})
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`SABAR YAAAA....`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kurr.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(`SABAR YAAAA....`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kurr.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                m.reply(`SABAR YAAAA....`)
		let { UploadFileUgu, webp2mp4File } = require('./lib/uploader')
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `› No : ${no++}\n› Type : ${i.type}\n› Video ID : ${i.videoId}\n› Title : ${i.title}\n› Views : ${i.views}\n› Duration : ${i.timestamp}\n› Upload At : ${i.ago}\n› Url : ${i.url}\n\n─────────────────\n\n`
                }
                kurr.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} kurr arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `› *Title* : ${g.title}\n`
                teks += `› *Description* : ${g.snippet}\n`
                teks += `› *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
            
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `entah`, buttonText: {displayText: 'Thank You Bot'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: 'T R A S H - B O T',
                    buttons: buttons,
                    headerType: 4
                }
                kurr.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        

	    case 'telesticker': {
		if (!text) throw `Example : ${prefix + command} https://t.me/addstickers/c1129234339_by_HarukaAyaBot`
		let anu = await xfarr.Telesticker(isUrl(text)[0])
                for (let i = 0; i < (anu.length < 10 ? anu.length : 10); i++) {
                    let encmedia = await kurr.sendImageAsSticker(m.chat, anu[i].url, m, { packname: packname, author: author })
                    await fs.unlinkSync(encmedia)
                }
	    }
	    break
            case 'zippyshare': case 'zippydl': {
                if (!text) throw `Example : ${prefix + command} https://www69.zippyshare.com/v/MRLWO4qB/file.html#!/N27zvKSgDG46JQ6`
                let anu = await zippyDownloader(isUrl(text)[0])
                if (Number(anu.size.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
                kurr.sendText(m.chat, util.format(anu), m)
                kurr.sendMedia(m.chat, anu.link, '', m)
            }
            break
            case 'mediafire': case 'mediafiredl': {
                if (!text) throw `Example : ${prefix + command} http://www.mediafire.com/file/naqy6ofoqkb6poi/Anime_MUGEN_300_Characters_by_Makoto_Itou_%2526_Kizuma_Gaming.apk/file`
                let anu = await mediafireDownloader(isUrl(text)[0])
                if (Number(anu.filesize.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
		kurr.sendText(m.chat, util.format(anu), m)
                kurr.sendMedia(m.chat, anu.link, '', m)
            }
            break
	    
	    case 'soundcloud': {
                if (!text) throw `Example : ${prefix + command} https://soundcloud.com/kevingates/really-really`
                let anu = await facebookDownloader(isUrl(text)[0])
                let result = anu.medias[0]
		if (Number(result.formattedSize.split("MB")[0]) >= 40.00) return m.reply('File Melebihi Batas '+util.format(result))
		kurr.sendMessage(m.chat, { image: { url: anu.thumbnail }, caption: util.format(anu) }, { quoted: m })
                kurr.sendMedia(m.chat, result.url, '', m)
            }
            break
	    case 'stickersearch': case 'ssearch': {
                if (!text) throw `Example : ${prefix + command} loli`
                let anu = await xfarr.StickerSearch(text)
                for (let i = 0; i < (anu.sticker_url.length < 5 ? anu.sticker_url.length : 5); i++) {
                    let encmedia = await kurr.sendMediaAsSticker(m.chat, anu.sticker_url[i], m, { packname: packname, author: author })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'tutormp3':
                okurr = `SALIN LINK URL DIATAS LALU KETIK
ytmp3 <link url diatas>`
m.reply(okurr)
break
case 'tutormp4':
                okurr2 = `SALIN LINK URL DIATAS LALU KETIK
ytmp4 <link url diatas>`
m.reply(okurr2)
break
	    case 'play': case 'ytplay': {
                
            if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                linknya = `${anu.url}`
                let buttons = [
                    {buttonId: `tutormp3`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `tutormp4`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
› Title : ${anu.title}
› Ext : Search
› Url : ${anu.url}`,
                    footer: 'T R A S H - B O T',
                    buttons: buttons,
                    headerType: 4
                }
                
                kurr.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ytmp3': {
                if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
               let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                    if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
                m.reply(`SABAR YAAAA....`)
                anu = await ytMp3(text)
                
              if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
                kurr.sendImage(m.chat, `${anu.thumb}`, `Title: ${anu.title}\n Channel: ${anu.channel}\n Like: ${anu.likes}\n Dislike: ${anu.dislike}\n Views: ${anu.views}\nQuality: ${anu.quality}\n Size: ${anu.size}\n Upload: ${anu.uploadDate}\nDesc: ${anu.desc}`, m)
                kurr.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mp4', fileName: `${anu.title}.mp3\n\nFile akan di kirim mohon sabar` }, { quoted: m })
                }
                break
            case 'ytmp4': {
            if (!text) throw `Example: ytmp4 https://youtu.be/BkBL0Rx-Dtw`
           let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Link yang ada masukan mungkin bukan url youtube`
            m.reply(`SABAR YAAAA....`)
            anu = await ytMp4(text)
                    if (Number(anu.size.split("MB")[0]) >= 9000) return m.reply('File Melebihi Batas '+util.format(anu))
            kurr.sendMessage(m.chat, { video: { url: anu.result }, fileName: `${anu.title}.mp4`, mimetype: 'video/mp4', caption: `Title: ${anu.title}\n Channel: ${anu.channel}\n Like: ${anu.likes}\n Dislike: ${anu.dislike}\n Views: ${anu.views}\nQuality: ${anu.quality}\n Size: ${anu.size}\n Upload: ${anu.uploadDate}\nDesc: ${anu.desc}` }, { quoted: m })
            }
            break

	    case 'getexif': {
	        let webp = require('node-webpmux')
		if (!quoted) return m.reply('Reply Stickernya')
		let que = { message: { [m.quoted.mtype]: m.quoted } }
		if (/webp/.test(mime)) {
		   anu = await new webp.Image()
		   await anu.load(await quoted.download())
		   m.reply(util.format(JSON.parse(anu.exif.slice(22).toString())))
		}
	    }
	    break  
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to change this sticker command'
                cmdmedia[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (cmdmedia[hash] && cmdmedia[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete cmdmedia[hash]
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(cmdmedia).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                kurr.sendText(m.chat, teks, m, { mentions: Object.values(cmdmedia).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in cmdmedia)) throw 'Hash not found in database'
                cmdmedia[hash].locked = !/^un/i.test(command)
                fs.writeFileSync('./lib/db/cmd.json', JSON.stringify(cmdmedia))
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
                fs.writeFileSync('./lib/db/msg.json', JSON.stringify(msgs))
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                kurr.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
	        let seplit = Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `› *Name :* ${i.nama}\n› *Type :* ${Object.keys(i.message)[0]}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
                fs.writeFileSync('./lib/db/msg.json', JSON.stringify(msgs))
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'addrespon':
			if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
				if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan command} *teks|teks*`)
const arg = args.join(' ')
atas = arg.split('|')[0]
bawah = arg.split('|')[1]
				if (checkCommands(atas, commandsDB) === true) return m.reply(`Udah ada`)
				addCommands(atas, bawah, sender, commandsDB)
				m.reply(`Sukses menambahkan respon ${atas}`)
				break
			case 'delstik':
			if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
					try {
					 commandsDB.splice(text)
					 fs.unlinkSync('./lib/db/respon.json')
					 m.reply(`Sukses menghapus sticker ${body.slice(11)}`)
					} catch (err){
						console.log(err)
						m.reply('pack itu tidak terdaftar')
					}
					break
case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return m.reply(mess.only.ownerB)
				if (args.length < 1) return m.reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return m.reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				m.reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
m.reply(teks)
break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                kurr.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await kurr.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, kurr.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok bos')
                let other = room.other(m.sender)
                if (other) await kurr.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'sendkontak': case 'sendcontact': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                let profile = await kurr.profilePictureUrl(room.b)
                let status = await kurr.fetchStatus(room.b)
                let msg = await kurr.sendImage(room.a, profile, `Nama : ${await kurr.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                kurr.sendContact(room.a, [room.b.split("@")[0]], msg)
            }
            break
      
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, kurr.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kurr.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kurr.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await kurr.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kurr.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kurr.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await kurr.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kurr.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kurr.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await kurr.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, kurr.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, kurr.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                kurr.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                kurr.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                kurr.sendContact(m.chat, global.owner, m)
            }
            break
            case 'runtime':
                okbos = `BOT AKTIF SELAMA ${runtime(process.uptime())}`
                m.reply(okbos)
                break
                case 'help':
                    case 'menu':
                        aswu = '```'
                    Anu = `TRASH ADALAH BOT MULTI-DEVICE
YANG MENGGUNAKAN BAHASA NODEJS

› TRASH Version : 2.0.1
› Library : Baileys MD
› Language : Javascript
› Runtime : ${runtime(process.uptime())}`
let btn = [{
    urlButton: {
        displayText: 'WEBSITE STORE',
        url: 'https://kurrxdstore.my.id'
    }
},  {
    quickReplyButton: {
        displayText: 'RULES',
        id: 'rules'
    }
 }, {
    quickReplyButton: {
        displayText: 'SEWABOT',
        id: 'sewabot'
    }  }, {
        quickReplyButton: {
            displayText: 'TAMPILKAN SEMUA MENU',
            id: 'command'
        } 

    
                                    
 }]
logo2 = fs.readFileSync('./lib/assets/logo2.jpg'), 
kurr.send5ButImg(m.chat, 'TRASH BOT MULTI-DEVICE', Anu, logo2, btn)
                                          break
                                          case 'command':{
                                            let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                                            listMessage :{
                                                                title: `Hi ${pushname}`,
                                                                description: `KALAU ADA BUG SEGERA LAPOR OWNER`,
                                                                buttonText: "CLICK HERE",
                                                                footerText: `TRASH Version : 2.0.1`,
                                                                listType: "SINGLE_SELECT",
                                                                sections: [{
                                                                    "title": "Fitur Bot",
                                                                    "rows": [
                                                                        {
                                                                            "title": "[🖥]ALL MENU BOT",
                                                                            "description": "Menampilkan Semua Fitur!",
                                                                            "rowId": `${prefix}allmenu`
                                                                        },
                                                                        
                                                                        {
                                                                            
                                                                            "title": "[📱]CARI TEMAN ONLINE",
                                                                            "description": "INI UNTUK CARI TEMAN",
                                                                            "rowId": `${prefix}anonymousmenu`
                                                                        },
                                                                        {
                                                                        
                                                                            "title": "[⚙]GROUP SETTING",
                                                                            "description": "FITURE KHUSUS GRUP",
                                                                            "rowId": `${prefix}groupmenu`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "[🎥]VIDEO RANDOM",
                                                                            "description": "FITURE RANDOM",
                                                                            "rowId": `${prefix}videomenu`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "[💾]Download Fitur",
                                                                            "description": "Menampilkan Download Menu",
                                                                            "rowId": `${prefix}downloadmenu`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "[⛔]Other Menu",
                                                                            "description": "Menampilkan Other Menu",
                                                                            "rowId": `${prefix}othermenu`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "[🕹]Game Menu",
                                                                            "description": "Menampilkan Game Menu",
                                                                            "rowId": `${prefix}gamemenu`
                                                                        },
                                                                        {
                                                                            
                                                                            "title": "[♨️]Anime Menu",
                                                                            "description": "Menampilkan WIBUHHHHH Menu",
                                                                            "rowId": `${prefix}animemenu`
                                                                        },
                                                                        {
                                                                            "title": "[📝]Search Fitur",
                                                                            "description": "Menampilkan Search Fitur",
                                                                            "rowId": `${prefix}searchmenu`
                                                                        },								
                                                                            {
                                                                                "title": "[😁]Fun",
                                                                            "description": "Menampilkan Fun Fitur",
                                                                            "rowId": `${prefix}funmenu`
                                                                            },										
                                                                            {
                                                                                "title": "[🔧]Convert Fitur",
                                                                            "description": "Menampilkan Convert Fitur",
                                                                            "rowId": `${prefix}convertmenu`
                                                                            },										
                                                                            {
                                                                                "title": "[📷]Maker Menu",
                                                                            "description": "Menampilkan Ephoto Fitur",
                                                                            "rowId": `${prefix}makermenu`
                                                                            },										
                                                                            {
                                                                                "title": "[🖨]Database Fitur",
                                                                            "description": "Menampilkan Database Fitur",
                                                                            "rowId": `${prefix}databasemenu`
                                                                            },										
                                                                            {
                                                                            "title": "[🔨]Tolls Fitur",
                                                                            "description": "menampilkan Tolls Fitur",
                                                                            "rowId": `${prefix}toolsmenu`
                                                                            },
              
                                                                                    {
                                                                                        "title": "[🛡]Owner Fitur",
                                                                                        "description": "menampilkan Owner Fitur ( Khusus Owner )",
                                                                                        "rowId": `${prefix}ownermenu`
                                                                                    }
                                                                    ]
                                                                       
                                                                        }
                                                                    ],
                                                      listType: 1
                                                            }
                                                        }), {})
                                                        kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                                        }
                                                        break
                                          case 'pulsa':
                                              m.reply(`ANDA MEMILIH DONASI PULSA\nTRANSFER KE 0812-2067-0449\nTELKOMSEL`)
                                              break
                                          case 'donasi':
                    Sup = `
╭───[ *SUPPORT - B O T*  ]───

TERIMA KASIH SUDAH MAU SUPORT BOT

SUPORT BOT DENGAN DONASI :

`
let bton = [{
    urlButton: {
        displayText: 'DONASI VIA SAWERIA',
        url: 'https://saweria.co/KurrXd'
    }
}, {
    urlButton: {
        displayText: 'DONASI VIA SCAN QRISS',
        url: 'https://telegra.ph/file/d691b521095db77b8614c.jpg'
    }
}, {
    quickReplyButton: {
        displayText: 'DONASI LEWAT PULSA',
        id: 'pulsa'
    }
 
    
                                    
 }]
donasi = fs.readFileSync('./lib/assets/donasi.jpg'), 
kurr.send5ButImg(m.chat, Sup, ` SUPPORT BOT `, donasi, bton)
                                          break
    
                                          case 'allmenu':                                    pref = 1
                                              anj = ``
 okok = `     [ *ALL MENU TRASH* ]
 ├───[   *CONVERT*  ]────
 ➥⬣ ${prefix}toimage <reply sticker>
 ➥⬣ ${prefix}sticker <reply img/vid>
 ➥⬣ ${prefix}tovideo <reply sticker>
 ➥⬣ ${prefix}togif <reply video>
 ➥⬣ ${prefix}tomp3 <reply video>
 ➥⬣ ${prefix}tourl <reply media>
 ➥⬣ ${prefix}emojimix <😎+😐>
 ➥⬣ ${prefix}voice <option>
 ├───[   *VIDEO MENU*   ]────
 ➥⬣ ${prefix}asupan
 ➥⬣ ${prefix}felisa
 ├───[   *GRUP*   ]────
 ➥⬣ ${prefix}linkgc
 ➥⬣ ${prefix}setname <text>
 ➥⬣ ${prefix}group <open/close>
 ➥⬣ ${prefix}antilink <on/off>
 ➥⬣ ${prefix}add 62xx
 ➥⬣ ${prefix}kick <@user>
 ➥⬣ ${prefix}promote <@user>
 ➥⬣ ${prefix}demote <@user>
 ➥⬣ ${prefix}listonline
 ➥⬣ ${prefix}listgc
 ➥⬣ ${prefix}tagall
 ➥⬣ ${prefix}taginfo
 ➥⬣ ${prefix}hidetag
 ├───[   ANONYMOUS BETA  ]────
 ➥⬣ ${prefix}stop
 ➥⬣ ${prefix}next
 ➥⬣ ${prefix}start
 ➥⬣ ${prefix}anonymous
 ➥⬣ ${prefix}sendcontact 
 (untuk kirim kontak partnert)
 ├───[   TOOLS  ]────
 ➥⬣ ${prefix}getexif
 ➥⬣ ${prefix}get / fetch <link>
 ➥⬣ ${prefix}nulis
 ├───[   SEARCH   ]────
 ➥⬣ ${prefix}google <query>
 ➥⬣ ${prefix}yts <query>
 ➥⬣ ${prefix}gimage <query>
 ➥⬣ ${prefix}ytsearch <query>
 ➥⬣ ${prefix}wikimedia <query>
 ➥⬣ ${prefix}wikimedia <query>
 ├───[   DOWNLOADER   ]────
 ➥⬣ ${prefix}play <nama lagu>
 ➥⬣ ${prefix}ytmp4 <link>
 ➥⬣ ${prefix}ytmp3 <link>
 ➥⬣ ${prefix}tiktok <link>
 ➥⬣ ${prefix}ig <link> (tidak suportnreels!!!)
 ➥⬣ ${prefix}telesticker <link>
 ➥⬣ ${prefix}soundcloud <link>
 ➥⬣ ${prefix}zippyshare <link>
 ➥⬣ ${prefix}mediafire <link>
 ├───[   FUN   ]────
 ➥⬣ ${prefix}halah <text>
 ➥⬣ ${prefix}hilih <text>
 ➥⬣ ${prefix}huluh <text>
 ➥⬣ ${prefix}heleh <text>
 ➥⬣ ${prefix}holoh  <text>
 ➥⬣ ${prefix}afk <reason>
 ➥⬣ ${prefix}jadian
 ➥⬣ ${prefix}jodohku
 ├───[   GAME   ]────
 ➥⬣ ${prefix}kuismath <option>
 ➥⬣ ${prefix}family100
 ➥⬣ ${prefix}tekateki
 ➥⬣ ${prefix}susunkata
 ➥⬣ ${prefix}caklontong
 ➥⬣ ${prefix}tebak <option>
 ├───[   OWNER   ]────
 ➥⬣ ${prefix}setpp
 ➥⬣ ${prefix}join <Link Group>
 ➥⬣ ${prefix}block @nomer
 ➥⬣ ${prefix}unblock @nomer
 ➥⬣ ${prefix}ban @user
 ➥⬣ ${prefix}unban @user
 ➥⬣ ${prefix}bctext
 ➥⬣ ${prefix}bcgc
 ➥⬣ ${prefix}bcimg
 ➥⬣ ${prefix}bcvidio
 ➥⬣ ${prefix}bcaudio
 ➥⬣ ${prefix}> / $ / => / <
 ├───[   OTHER   ]────
 ➥⬣ ${prefix}smeme <reply sticker>
 ➥⬣ ${prefix}dashboard
 ➥⬣ ${prefix}rules
 ➥⬣ ${prefix}owner
 ├───[   DATABASE   ]────
 ➥⬣ ${prefix}setcmd <reply sticker>
 ➥⬣ ${prefix}delcmd <reply sticker>
 ➥⬣ ${prefix}listcmd
 ➥⬣ ${prefix}lockcmd <hash>
 ➥⬣ ${prefix}addmsg <reply pesan>
 ➥⬣ ${prefix}delmsg
 ➥⬣ ${prefix}getmsg
 ➥⬣ ${prefix}listmsg
 ├───[   ANIME   ]────
 ➥⬣ ${prefix}itachi
 ➥⬣ ${prefix}sasuke
 ➥⬣ ${prefix}kakasih
 ➥⬣ ${prefix}loli
 ➥⬣ ${prefix}miku
 ➥⬣ ${prefix}mikasa
 ➥⬣ ${prefix}neko
 ➥⬣ ${prefix}waifu
 ➥⬣ ${prefix}asuna
 ➥⬣ ${prefix}elaina
 ➥⬣ ${prefix}hinata
 ➥⬣ ${prefix}nezuko
 ├───[   TEXTPRO   ]────
 ➥⬣ ${prefix}candy
 ➥⬣ ${prefix}3dchristmas
 ➥⬣ ${prefix}sparklechristmas
 ➥⬣ ${prefix}deepsea
 ➥⬣ ${prefix}scifi
 ➥⬣ ${prefix}rainbow
 ➥⬣ ${prefix}waterpipe
 ➥⬣ ${prefix}spooky
 ➥⬣ ${prefix}pencil
 ➥⬣ ${prefix}circuit
 ➥⬣ ${prefix}discovery
 ➥⬣ ${prefix}metalic
 ➥⬣ ${prefix}fiction
 ➥⬣ ${prefix}demon
 ➥⬣ ${prefix}transformer
 ➥⬣ ${prefix}berry
 ➥⬣ ${prefix}thunder
 ➥⬣ ${prefix}magma
 ➥⬣ ${prefix}3dstone
 ➥⬣ ${prefix}neonlight
 ➥⬣ ${prefix}glitch
 ➥⬣ ${prefix}harrypotter
 ➥⬣ ${prefix}brokenglass
 ➥⬣ ${prefix}papercut
 ➥⬣ ${prefix}watercolor
 ➥⬣ ${prefix}multicolor
 ➥⬣ ${prefix}neondevil
 ➥⬣ ${prefix}underwater
 ➥⬣ ${prefix}graffitibike
 ➥⬣ ${prefix}snow
 ➥⬣ ${prefix}cloud
 ➥⬣ ${prefix}honey
 ➥⬣ ${prefix}ice
 ➥⬣ ${prefix}fruitjuice
 ➥⬣ ${prefix}biscuit
 ➥⬣ ${prefix}wood
 ➥⬣ ${prefix}chocolate
 ➥⬣ ${prefix}strawberry
 ➥⬣ ${prefix}matrix
 ➥⬣ ${prefix}blood
 ➥⬣ ${prefix}dropwater
 ➥⬣ ${prefix}toxic
 ➥⬣ ${prefix}lava
 ➥⬣ ${prefix}rock
 ➥⬣ ${prefix}bloodglas
 ➥⬣ ${prefix}hallowen
 ➥⬣ ${prefix}darkgold
 ➥⬣ ${prefix}joker
 ➥⬣ ${prefix}wicker
 ➥⬣ ${prefix}firework
 ➥⬣ ${prefix}skeleton
 ➥⬣ ${prefix}blackpink
 ➥⬣ ${prefix}sand
 ➥⬣ ${prefix}glue
 ➥⬣ ${prefix}1917
 ➥⬣ ${prefix}leaves
 ├───[   EPHOTO360   ]────
 ➥⬣ ${prefix}anonymous
 ➥⬣ ${prefix}boom
 ➥⬣ ${prefix}onepiece
 ➥⬣ ${prefix}avatar
 ➥⬣ ${prefix}galaxynimw
 ➥⬣ ${prefix}signature
 ➥⬣ ${prefix}window
 ➥⬣ ${prefix}3d
 ➥⬣ ${prefix}birthday
 ➥⬣ ${prefix}snow
 ➥⬣ ${prefix}cloud
 ➥⬣ ${prefix}papercolor
 ➥⬣ ${prefix}cutegravity
 ➥⬣ ${prefix}cutegravity
 ➥⬣ ${prefix}underwater
 ➥⬣ ${prefix}hallowen3
 ➥⬣ ${prefix}hallowen
 ➥⬣ ${prefix}glassrain
 ➥⬣ ${prefix}neon
 ➥⬣ ${prefix}goldsand
 ➥⬣ ${prefix}goldbanner
 ➥⬣ ${prefix}sand
 ➥⬣ ${prefix}valorant
 ➥⬣ ${prefix}glitter
 ➥⬣ ${prefix}pornhub
 ➥⬣ ${prefix}tipografi
 ➥⬣ ${prefix}wallgravity
 ➥⬣ ${prefix}gravity
 ➥⬣ ${prefix}birthday
 ╰───[ T R A S H - B O T   ]───`
 let butong = [{
    urlButton: {
        displayText: 'INSTAGRAM OWNER',
       url: 'https://instagram.com/KurrTod'
        }
   },{
    quickReplyButton: {
        displayText: 'Contact Owner',
        id: 'owner'
    }  
 },
 {
    quickReplyButton: {
        displayText: 'Status Bot',
        id: 'ping'
    }  
 }, {
    quickReplyButton: {
        displayText: 'SUPORT BOT',
        id: 'donasi'
 }
                                
 }]
 
 
 kurr.send5ButImg(m.chat,  okok, ` ALL MENU BOT `,  logo2, butong)
                                          break
 
case 'convertmenu':
                                              
 okok1 = `
 ├───[   *CONVERT*  ]────
 
 ➥⬣ ${prefix}toimage <reply sticker>
 ➥⬣ ${prefix}sticker <reply img/vid>
 ➥⬣ ${prefix}tovideo <reply sticker>
 ➥⬣ ${prefix}togif <reply video>
 ➥⬣ ${prefix}tomp3 <reply video>
 ➥⬣ ${prefix}tourl <reply media>
 ➥⬣ ${prefix}emojimix <😎+😐>
 ➥⬣ ${prefix}voice <option>
 
 ╰───[ T R A S H - B O T   ]───`
 
 
 
 kurr.send5ButImg(m.chat, okok1, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'groupmenu':
                                              
 okok2 = `
 ├───[   *GRUP*   ]────
 
 ➥⬣ ${prefix}linkgc
 ➥⬣ ${prefix}setname <text>
 ➥⬣ ${prefix}group <open/close>
 ➥⬣ ${prefix}antilink <on/off>
 ➥⬣ ${prefix}add 62xx
 ➥⬣ ${prefix}kick <@user>
 ➥⬣ ${prefix}promote <@user>
 ➥⬣ ${prefix}demote <@user>
 ➥⬣ ${prefix}listonline
 ➥⬣ ${prefix}listgc
 ➥⬣ ${prefix}tagall
 ➥⬣ ${prefix}taginfo
 ➥⬣ ${prefix}hidetag
 
 ╰───[ T R A S H - B O T   ]───`

 kurr.send5ButImg(m.chat, okok2, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'anonymousmenu':
                                              
 okok3 = `
├───[   ANONYMOUS BETA  ]────
 
 ➥⬣ ${prefix}stop
 ➥⬣ ${prefix}next
 ➥⬣ ${prefix}start
 ➥⬣ ${prefix}anonymous
  ➥⬣ ${prefix}sendcontact 
 (untuk kirim kontak partnert)
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok3, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'toolsmenu':
                                              
 okok4 = `
 ├───[   TOOLS  ]────
 
 ➥⬣ ${prefix}getexif
 ➥⬣ ${prefix}get / fetch <link>
 ➥⬣ ${prefix}nulis


 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok4, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'searchmenu':
                                              
 okok5 = `
 ├───[   SEARCH   ]────
 
 ➥⬣ ${prefix}google <query>
 ➥⬣ ${prefix}yts <query>
 ➥⬣ ${prefix}gimage <query>
 ➥⬣ ${prefix}ytsearch <query>
 ➥⬣ ${prefix}wikimedia <query>
 ➥⬣ ${prefix}wikimedia <query>
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok5, ` Jangan Lupa Donasi `, logo1, butong1)
break
  case 'downloadmenu':
                                              
 okok6 = `

 ├───[   DOWNLOADER   ]────
 
 ➥⬣ ${prefix}play <nama lagu>
 ➥⬣ ${prefix}ytmp4 <link>
 ➥⬣ ${prefix}ytmp3 <link>
 ➥⬣ ${prefix}tiktok <link>
 ➥⬣ ${prefix}ig <link> (tidak suportnreels!!!)
 ➥⬣ ${prefix}telesticker <link>
 ➥⬣ ${prefix}soundcloud <link>
 ➥⬣ ${prefix}zippyshare <link>
 ➥⬣ ${prefix}mediafire <link>
 
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok6, ` Jangan Lupa Donasi `, logo1, butong1)
break
 
case 'funmenu':
                                              
 okok7 = `

├───[   FUN   ]────
 
 ➥⬣ ${prefix}halah <text>
 ➥⬣ ${prefix}hilih <text>
 ➥⬣ ${prefix}huluh <text>
 ➥⬣ ${prefix}heleh <text>
 ➥⬣ ${prefix}holoh  <text>
 ➥⬣ ${prefix}afk <reason>
 ➥⬣ ${prefix}jadian
 ➥⬣ ${prefix}jodohku
 
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok7, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'gamemenu':
                                              
 okok8 = `

├───[   GAME   ]────
 
 ➥⬣ ${prefix}kuismath <option>
 ➥⬣ ${prefix}family100
 ➥⬣ ${prefix}tekateki
 ➥⬣ ${prefix}susunkata
 ➥⬣ ${prefix}caklontong
 ➥⬣ ${prefix}tebak <option>
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok8, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'ownermenu':
                                              
 okok9 = `

├───[   OWNER   ]────
 ➥⬣ ${prefix}setpp
 ➥⬣ ${prefix}join <Link Group>
 ➥⬣ ${prefix}block @nomer
 ➥⬣ ${prefix}unblock @nomer
 ➥⬣ ${prefix}ban @user
 ➥⬣ ${prefix}unban @user
 ➥⬣ ${prefix}bctext
 ➥⬣ ${prefix}bcgc
 ➥⬣ ${prefix}bcimg
 ➥⬣ ${prefix}bcvidio
 ➥⬣ ${prefix}bcaudio
 ➥⬣ ${prefix}> / $ / => / <
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok9, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'othermenu':
                                              
 okok10 = `

 ├───[   OTHER   ]────
 
 ➥⬣ ${prefix}felisa
 ➥⬣ ${prefix}smeme <reply sticker>
 ➥⬣ ${prefix}dashboard
 ➥⬣ ${prefix}rules
 ➥⬣ ${prefix}owner
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok10, ` Jangan Lupa Donasi `, logo1, butong1)
break
  case 'databasemenu':
                                              
 okok11 = `

 ├───[   DATABASE   ]────
 
 ➥⬣ ${prefix}setcmd <reply sticker>
 ➥⬣ ${prefix}delcmd <reply sticker>
 ➥⬣ ${prefix}listcmd
 ➥⬣ ${prefix}lockcmd <hash>
 ➥⬣ ${prefix}addmsg <reply pesan>
 ➥⬣ ${prefix}delmsg
 ➥⬣ ${prefix}getmsg
 ➥⬣ ${prefix}listmsg
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok11, ` Jangan Lupa Donasi `, logo1, butong1)
break
 case 'animemenu':
                                              
 okok12 = `

 ├───[   ANIME   ]────
 
 ➥⬣ ${prefix}itachi
 ➥⬣ ${prefix}sasuke
 ➥⬣ ${prefix}kakasih
 ➥⬣ ${prefix}loli
 ➥⬣ ${prefix}miku
 ➥⬣ ${prefix}mikasa
 ➥⬣ ${prefix}neko
 ➥⬣ ${prefix}waifu
 ➥⬣ ${prefix}asuna
 ➥⬣ ${prefix}elaina
 ➥⬣ ${prefix}hinata
 ➥⬣ ${prefix}nezuko
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok12, ` Jangan Lupa Donasi `, logo1, butong1)
break
case 'videomenu':
                                              
 okok09 = `

 ├───[   *VIDEO MENU*   ]────

 ➥⬣ ${prefix}asupan
 ➥⬣ ${prefix}felisa


 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok09, ` Jangan Lupa Donasi `, logo1, butong1)
break
  case 'makermenu':
                                              
 okok13 = `
 ├───[   TEXTPRO   ]────
 
 ➥⬣ ${prefix}candy
 ➥⬣ ${prefix}3dchristmas
 ➥⬣ ${prefix}sparklechristmas
 ➥⬣ ${prefix}deepsea
 ➥⬣ ${prefix}scifi
 ➥⬣ ${prefix}rainbow
 ➥⬣ ${prefix}waterpipe
 ➥⬣ ${prefix}spooky
 ➥⬣ ${prefix}pencil
 ➥⬣ ${prefix}circuit
 ➥⬣ ${prefix}discovery
 ➥⬣ ${prefix}metalic
 ➥⬣ ${prefix}fiction
 ➥⬣ ${prefix}demon
 ➥⬣ ${prefix}transformer
 ➥⬣ ${prefix}berry
 ➥⬣ ${prefix}thunder
 ➥⬣ ${prefix}magma
 ➥⬣ ${prefix}3dstone
 ➥⬣ ${prefix}neonlight
 ➥⬣ ${prefix}glitch
 ➥⬣ ${prefix}harrypotter
 ➥⬣ ${prefix}brokenglass
 ➥⬣ ${prefix}papercut
 ➥⬣ ${prefix}watercolor
 ➥⬣ ${prefix}multicolor
 ➥⬣ ${prefix}neondevil
 ➥⬣ ${prefix}underwater
 ➥⬣ ${prefix}graffitibike
 ➥⬣ ${prefix}snow
 ➥⬣ ${prefix}cloud
 ➥⬣ ${prefix}honey
 ➥⬣ ${prefix}ice
 ➥⬣ ${prefix}fruitjuice
 ➥⬣ ${prefix}biscuit
 ➥⬣ ${prefix}wood
 ➥⬣ ${prefix}chocolate
 ➥⬣ ${prefix}strawberry
 ➥⬣ ${prefix}matrix
 ➥⬣ ${prefix}blood
 ➥⬣ ${prefix}dropwater
 ➥⬣ ${prefix}toxic
 ➥⬣ ${prefix}lava
 ➥⬣ ${prefix}rock
 ➥⬣ ${prefix}bloodglas
 ➥⬣ ${prefix}hallowen
 ➥⬣ ${prefix}darkgold
 ➥⬣ ${prefix}joker
 ➥⬣ ${prefix}wicker
 ➥⬣ ${prefix}firework
 ➥⬣ ${prefix}skeleton
 ➥⬣ ${prefix}blackpink
 ➥⬣ ${prefix}sand
 ➥⬣ ${prefix}glue
 ➥⬣ ${prefix}1917
 ➥⬣ ${prefix}leaves
 
 ├───[   EPHOTO360   ]────
 
 ➥⬣ ${prefix}anonymous
 ➥⬣ ${prefix}boom
 ➥⬣ ${prefix}onepiece
 ➥⬣ ${prefix}avatar
 ➥⬣ ${prefix}galaxynimw
 ➥⬣ ${prefix}signature
 ➥⬣ ${prefix}window
 ➥⬣ ${prefix}3d
 ➥⬣ ${prefix}birthday
 ➥⬣ ${prefix}snow
 ➥⬣ ${prefix}cloud
 ➥⬣ ${prefix}papercolor
 ➥⬣ ${prefix}cutegravity
 ➥⬣ ${prefix}cutegravity
 ➥⬣ ${prefix}underwater
 ➥⬣ ${prefix}hallowen3
 ➥⬣ ${prefix}hallowen
 ➥⬣ ${prefix}glassrain
 ➥⬣ ${prefix}neon
 ➥⬣ ${prefix}goldsand
 ➥⬣ ${prefix}goldbanner
 ➥⬣ ${prefix}sand
 ➥⬣ ${prefix}valorant
 ➥⬣ ${prefix}glitter
 ➥⬣ ${prefix}pornhub
 ➥⬣ ${prefix}tipografi
 ➥⬣ ${prefix}wallgravity
 ➥⬣ ${prefix}gravity
 ➥⬣ ${prefix}birthday                 
 
 ╰───[ T R A S H - B O T   ]───`

 
 
 kurr.send5ButImg(m.chat, okok13, ` Jangan Lupa Donasi `, logo1, butong1)
break          
                                          case 'block': {
                                            if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                                            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                                            await kurr.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                                        }
                                        m.reply(`succes`)
                                        break
                                            case 'unblock': {
                                            if (!isCreator) throw  m.reply(`Lu Siapa Ajg`)
                                            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                                            await kurr.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                                        }
                                        m.reply(`succes`)
                                        break
            case 'sewa':
                case 'sewabot':
                    let btn1 = [{
                    
                        quickReplyButton: {
                            displayText: 'NOMER OWNER',
                            id: 'owner'
                        }
                                 
                                    }]
                    okok = '```'
                    okbor = `
${okok}HARGA SEWABOT TRASH ADALAH RP.10000 RUPIAH
JIKA MINAT HUBUNGI OWNER${okok}`
textTemplateButtons(m.chat, okbor, `Sewa Bot TRASH`, btn1)
                    break
            case 'ig':
                case 'igdl':
ok = await xfarr.Instagram(text)
kurr.sendMessage(m.chat, { video: { url: ok.medias[0].url, caption: 'Done' } }, { quoted: m })
break
            case 'tt':
                case 'tiktok':
                    case 'tiktoknowm':
                        
            if (!text) return m.reply('Linknya?')
             m.reply('Loading..')
             anu = await ttdown(text)
             kurr.sendMessage(m.chat, { video: { url: anu.nowm }, caption: `Nih Kak` }, { quoted: m})
             break
             case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await kurr.downloadAndSaveMediaMessage(quoted)
                await kurr.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'report':
           if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    kurr.sendText('6281220670449@s.whatsapp.net', `Bug Report\n${text}\n Dari ${pushname}`, m)
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
break
case 'saran':
           if (!text) throw `kalo kamu mau saran fitur,  pake perintah ini\n\ncontoh:\n${prefix + command} FITUR ANIME BANG`
    if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
    kurr.sendText('6281220670449@s.whatsapp.net', `SARAN BANG\n${text}\n Dari ${pushname}`, m)
    m.reply(`_Pesan terkirim kepemilik bot, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi._`)
break
            case 'rules':
            case 'tos':
            m.reply(`
*Tos :*
*- Jangan Pernah Menelpon Bot Dan Owner Jika Menelpon Akan di block Otomatis dan TIdak ada Kata Unblock ‼️*
*- Jika Menemukan Bug, Error, Saran Fitur Harap Segera Lapor Ke Owner*
*- Bot Ini masih dalam Tahap pengembangan baru bikin:v*

*YOUTUBE : https://youtube.com/KurrXd*
note :
WAJIB SUBREK UNTUK SUPPORT BOT
__________________________________
`)
break
            
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			 if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    kurr.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
