const arryBilhioteca = [
    xfilme01 = {nome: "NEM UM PASSO EM FALSO  ", url: "tt11525644" },
    xfilme02 = {nome: "BELEZA AVASSALADORA  ", url: "tt11027830" },
    xfilme03 = {nome: "AMERICA: THE MOTION PICTURE  ", url: "tt6733874" },
    xfilme04 = {nome: "COMO VIREI SUPERHERÓI  ", url: "tt10345590" },
    xfilme05 = {nome: "RUA DO MEDO: 1978  PARTE 2  ", url: "tt9701940" },
    xfilme06 = {nome: "VIÚVA NEGRA  ", url: "tt3480822" },
    xfilme07 = {nome: "ESPÉCIES EM PERIGO  ", url: "tt13863334" },
    xfilme08 = {nome: "AN AMERICAN PICKLE  ", url: "tt9059704" },
    xfilme09 = {nome: "A PERFECT ENEMY  ", url: "tt9421200" },
    xfilme10 = {nome: "UM PUNHADO DE CHUMBO  ", url: "tt7468604" },
    xfilme11 = {nome: "A OITAVA NOITE  ", url: "tt14781176" },
    xfilme12 = {nome: "RUA DO MEDO: 1994 – PARTE 1  ", url: "tt6566576" },
    xfilme13 = {nome: "A GUERRA DO AMANHÃ  ", url: "tt9777666" },
    xfilme14 = {nome: "DELIVERY MACABRO  ", url: "tt8510350" },
    xfilme15 = {nome: "CHARM CITY KINGS  ", url: "tt9048840" },
    xfilme16 = {nome: "INTROSPECTUM MOTEL  ", url: "tt7277234" },
    xfilme17 = {nome: "OCCUPATION: RAINFALL  ", url: "tt8615822" },
    xfilme18 = {nome: "PATERNIDADE  ", url: "tt4733624" },
    xfilme19 = {nome: "PRETTY GUARDIAN SAILOR MOON ETERNAL: O FILME  ", url: "tt10635042" },
    xfilme20 = {nome: "PRETTY GUARDIAN SAILOR MOON ETERNAL: O FILME  PARTE 2  ", url: "tt10635042-2" },
    xfilme21 = {nome: "À SEGUNDA VISTA  ", url: "tt8231668" },
    xfilme22 = {nome: "SEGURANÇA  ", url: "tt11892916" },
    xfilme23 = {nome: "SWEET & SOUR  ", url: "tt14599938" },
    xfilme24 = {nome: "UM AMOR APÓS A VIDA  ", url: "tt7401840" },
    xfilme25 = {nome: "OS PEQUENOS VESTÍGIOS  ", url: "tt10016180" },
    xfilme26 = {nome: "NÃO OLHE PARA O BERÇO  ", url: "tt5903358" },
    xfilme28 = {nome: "KANDASAMYS: A VIAGEM  ", url: "tt14611368" },
    xfilme29 = {nome: "SEQUESTRO INTERNACIONAL  ", url: "tt11229780" },
    xfilme30 = {nome: "FAMÍLIA YAKUZA  ", url: "tt13356884" },
    xfilme31 = {nome: "O GÂNGSTER NÔMADE  ", url: "tt10661848" },
    xfilme32 = {nome: "BATMAN: O LONGO DIA DAS BRUXAS – PARTE 1  ", url: "tt14324650" },
    xfilme33 = {nome: "DUPLA EXPLOSIVA 2 CAL  ", url: "tt8385148" },
    xfilme34 = {nome: "CIDADE DE GELO  ", url: "tt10525672" },
    xfilme35 = {nome: "SAMURAI X: O FINAL  ", url: "tt11809034" },
    xfilme36 = {nome: "LUCA  ", url: "tt12801262" },
    xfilme37 = {nome: "INFINITE  ", url: "tt6654210" },
    xfilme38 = {nome: "DOR E GLÓRIA  ", url: "tt8291806" },
    xfilme39 = {nome: "ENCRENCÃO  ", url: "tt6772524" },
    xfilme40 = {nome: "DIN E O DRAGÃO GENIAL  ", url: "tt5562070" },
    xfilme41 = {nome: "UMA SKATISTA RADICAL  ", url: "tt6964940" },
    xfilme42 = {nome: "POSTAIS MORTÍFEROS  ", url: "tt4106514" },
    xfilme43 = {nome: "PERFEIÇÃO INSONDÁVEL  ", url: "tt9264728" },
    xfilme44 = {nome: "JUNTOS NOVAMENTE  ", url: "tt14062858" },
    xfilme45 = {nome: "AWAKE  ", url: "tt10418662" },
    xfilme46 = {nome: "AQUARIUM OF THE DEAD  ", url: "tt13835046" },
    xfilme47 = {nome: "AMERICAN BADGER  ", url: "tt12712572" },
    xfilme50 = {nome: "XTREMO  ", url: "tt11658120" },
    xfilme51 = {nome: "DANCING QUEENS  ", url: "tt13032716" },
    xfilme52 = {nome: "616 WILFORD LANE  ", url: "tt10225926" },
    xfilme53 = {nome: "DRUNK BUS  ", url: "tt5134254" },
    xfilme54 = {nome: "SEANCE  ", url: "tt11188624" },
    xfilme55 = {nome: "O CONVIDADO  ", url: "tt7645780" },
    xfilme56 = {nome: "SHALL WE PLAY?  ", url: "tt10912448" },
    xfilme57 = {nome: "INVOCAÇÃO DO MAL 3: A ORDEM DO DEMÔNIO  ", url: "tt7069210" },
    xfilme58 = {nome: "CARNAVAL  ", url: "tt14074470" },
    xfilme59 = {nome: "ATENTADOS EM LONDRES  ", url: "tt12939812" },
    xfilme60 = {nome: "O DIVINO BAGGIO  ", url: "tt14025788" },
    xfilme61 = {nome: "MILAGRE AZUL  ", url: "tt7084386" },
    xfilme62 = {nome: "RELÍQUIA MACABRA  ", url: "tt9072352" },
    xfilme63 = {nome: "INFILTRADO  AUDIO FÃ LA ", url: "tt11083552" },
    xfilme64 = {nome: "AQUELES QUE ME DESEJAM A MORTE  ", url: "tt3215824" },
    xfilme65 = {nome: "ESPIRAL: O ADO DE JOGOS MORTAIS   ", url: "tt10342730" },
    xfilme66 = {nome: "ROGAI POR NÓS  ", url: "tt9419056" },
    xfilme67 = {nome: "UM LUGAR SILENCIOSO  PARTE 2  ", url: "tt8332922" },
    xfilme68 = {nome: "CRUELLA  ", url: "tt3228774" },
    xfilme69 = {nome: "VOCÊ É O PRÓXIMO  ", url: "tt1853739" },
    xfilme70 = {nome: "O REBANHO  ", url: "tt7737734" },
    xfilme71 = {nome: "MEU ETERNO PRIMEIRO AMOR  ", url: "tt10485148" },
    xfilme72 = {nome: "ARMY OF THE DEAD: INVASÃO EM LAS VEGAS  ", url: "tt0993840" },
    xfilme73 = {nome: "VELOZES E FURIOSOS 9   ", url: "tt5433138" },
    xfilme74 = {nome: "AMERICAN PIE APRESENTA: MENINAS AO ATAQUE  ", url: "tt11771594" },
    xfilme75 = {nome: "EU SOU TODAS AS MENINAS  ", url: "tt9013182" },
    xfilme76 = {nome: "FERRY  ", url: "tt14217100" },
    xfilme77 = {nome: "O MISTÉRIO DA CASA ASSOMBRADA  ", url: "tt9654108" },
    xfilme78 = {nome: "PAINKILLER  ", url: "tt10799922" },
    xfilme79 = {nome: "ROSA AMARELA  ", url: "tt6862538" },
    xfilme80 = {nome: "THE PAPER TIGERS  ", url: "tt6060444" },
    xfilme81 = {nome: "THE WHEEL  ", url: "tt6437228" },
    xfilme82 = {nome: "WHY?  ", url: "tt10313806" },
    xfilme83 = {nome: "WRONG PLACE, WRONG TIME  ", url: "tt13281312" },
    xfilme84 = {nome: "BOYS FROM COUNTY HELL  ", url: "tt10262380" },
    xfilme85 = {nome: "THE COVE  ", url: "tt12922082" },
    xfilme86 = {nome: "O FILHO DO NOIVO  ", url: "tt5969180" },
    xfilme87 = {nome: "REVISITANT  ", url: "tt6435770" },
    xfilme88 = {nome: "RONDA NOTURNA  ", url: "tt9850344" },
    xfilme89 = {nome: "SWEET RIVER  ", url: "tt10952012" },
    xfilme90 = {nome: "PROCURASE  ", url: "tt9794630" },
    xfilme91 = {nome: "ATAQUE FATAL  ", url: "tt10619512" },
    xfilme92 = {nome: "ALERTA VERMELHO  ", url: "tt11285908" },
    xfilme93 = {nome: "ALVO NÚMERO UM  ", url: "tt1656177" },
    xfilme94 = {nome: "A PEDRA DA SERPENTE  ", url: "tt8356674" },
    xfilme95 = {nome: "O PERFEITO SR. CHA  ", url: "tt13667212" },
    xfilme96 = {nome: "OS INTRUSOS  ", url: "tt9806370" },
    xfilme97 = {nome: "MARIGHELLA  ", url: "tt7825208" },
    xfilme98 = {nome: "OXIGÊNIO  ", url: "tt6341832" },
    xfilme99 = {nome: "WALTER  ", url: "tt9680064" },
    xfilme100 = {nome: "DEPOIS A LOUCA SOU EU  ", url: "tt10520386" },
    e1filmes = { nome: "Sem Remorso  ", url: "tt0499097" },
    e2filmes = { nome: "Demon Slayer: O Trem Infinito  ", url: "tt11032374" },
    e3filmes = { nome: "O Quinto Passageiro  ", url: "tt3165632" },
    e4filmes = { nome: "À Espreita do Mal  ", url: "tt6079516" },
    e5filmes = { nome: "Breeder  ", url: "tt11003228" },
    e6filmes = { nome: "Diga-me Quando  ", url: "tt10648198" },
    e7filmes = { nome: "Em busca de Sheela  ", url: "tt14167424" },
    e8filmes = { nome: "No Matarás  ", url: "tt4359330" },
    e9filmes = { nome: "Pesadelo nas Alturas  ", url: "tt5498354" },
    e10filmes = { nome: "Druk - Mais Uma Rodada HD  ", url: "tt10288566" },
    e11filmes = { nome: "Knights of Newgate  ", url: "tt6665070" },
    e12filmes = { nome: "Últimas Notícias de Yuba County  ", url: "tt7737640" },
    e13filmes = { nome: "Night of the Sicario  ", url: "tt10375916" },
    e14filmes = { nome: "País da Violência  ", url: "tt6205872" },
    e15filmes = { nome: "Passageiro Acidental  ", url: "tt9203694" },
    e16filmes = { nome: "Dente por Dente  ", url: "tt13333998" },
    e17filmes = { nome: "Honeydew  ", url: "tt10734864" },
    e18filmes = { nome: "Meu Pai  ", url: "tt10272386" },
    e19filmes = { nome: "O Legionário  ", url: "tt8318284" },
    e20filmes = { nome: "O Gangster, O Policial, O Diabo  ", url: "tt10208198" },
    e21filmes = { nome: "Souvenir  ", url: "tt6473982" },
    e22filmes = { nome: "Tenho Medo Toureiro  ", url: "tt10879920" },
    e23filmes = { nome: "Anônimo  ", url: "tt7888964" },
    e24filmes = { nome: "Radioactive  ", url: "tt6017756" },
    e25filmes = { nome: "Sonhos SA  ", url: "tt9855978" },
    e26filmes = { nome: "Na Batida do Coração  ", url: "tt10662234" },
    e27filmes = { nome: "O Lago da Mort‪e‬  ", url: "tt9272198" },
    e28filmes = { nome: "Original Gangster  ", url: "tt9824114" },
    e29filmes = { nome: "New Gods Nezha Reborn  ", url: "tt13269670" },
    e30filmes = { nome: "Pedro Coelho : O Fugitivo   ", url: "tt8376234" },
    e31filmes = { nome: "Women  ", url: "tt4600982" },
    e32filmes = { nome: "Assalto ao Banco da Espanha  ", url: "tt9742794" },
    e33filmes = { nome: "Jogos Virtuais: O Início  ", url: "tt8510324" },
    e34filmes = { nome: "O Protocolo de Auschwitz  ", url: "tt9415108" },
    e35filmes = { nome: "Esquadrão Trovão  ", url: "tt10121392" },
    e36filmes = { nome: "A Máscara de Ferro  ", url: "tt6218010" },
    e37filmes = { nome: "Silk Road - Mercado Clandestino  ", url: "tt7937254" },
    e38filmes = { nome: "Terror na Síria  ", url: "tt7897478" },
    e39filmes = { nome: "Tributo a Dolly Parton  ", url: "tt14299926" },
    e40filmes = { nome: "Witness Infection  ", url: "tt8000646" },
    e41filmes = { nome: "Até o Céu  ", url: "tt10978398" },
    e42filmes = { nome: "Apenas Diga Sim  ", url: "tt12154638" },
    e43filmes = { nome: "Fuja  ", url: "tt8633478" },
    e44filmes = { nome: "Homesick  ", url: "tt12625002" },
    e45filmes = { nome: "Irul  ", url: "tt13103212" },
    e46filmes = { nome: "One and the Same  ", url: "tt8906844" },
    e47filmes = { nome: "O Sétimo Dia  ", url: "tt11263022" },
    e48filmes = { nome: "The Toll  ", url: "tt9202550" },
    e49filmes = { nome: "Você Deveria Ter Partido  ", url: "tt8201852" },
    e50filmes = { nome: "AK-: A Arma que Mudou o Mundo  ", url: "tt11547520" },
    e51filmes = { nome: "Difícil de Matar  ", url: "tt11656172" },
    e52filmes = { nome: "Genesis Code  ", url: "tt5820846" },
    e53filmes = { nome: "Worth  ", url: "tt8009744" },
    e54filmes = { nome: "Mundo em Caos  ", url: "tt2076822" },
    e55filmes = { nome: "A Little Italian Vacation  ", url: "tt7177346" },
    e56filmes = { nome: "Assault on VA-  ", url: "tt12064810" },
    e57filmes = { nome: "Octonautas e o Círculo de Fogo  ", url: "tt13779166" },
    e58filmes = { nome: "Nos Braços de um Assassino  ", url: "tt10080270" },
    e59filmes = { nome: "Deixe-o Partir  ", url: "tt9340860" },
    e60filmes = { nome: "Big Pai, Big Filho, Big Família  ", url: "tt9204164" },
    e61filmes = { nome: "Bad Trip  ", url: "tt9684220" },
    e62filmes = { nome: "Shadowland  ", url: "tt9015714" },
    e63filmes = { nome: "Na Mesma Onda  ", url: "tt12013758" },
    e64filmes = { nome: "Come True  ", url: "tt7026488" },
    e65filmes = { nome: "Agência Secreta de Controle de Magias  ", url: "tt13932162" },
    e66filmes = { nome: "Superman IV: Em Busca da Paz  ", url: "tt0094074" },
    e67filmes = { nome: "Por Trás da Inocência  ", url: "tt7897330" },
    e68filmes = { nome: "Irresistível  ", url: "tt9076562" },
    e69filmes = { nome: "Insight  ", url: "tt3963674" },
    e70filmes = { nome: "Fúria Incontrolável  ", url: "tt10059518" },
    e71filmes = { nome: "Ameaça no Espaço  ", url: "tt9820556" },
    e72filmes = { nome: "Mortal Kombat  ", url: "tt0293429" },
    e73filmes = { nome: "A Bailarina  ", url: "tt2261287" },
    e74filmes = { nome: "Liga da Justiça de Zack Snyder  ", url: "tt12361974" },
    e75filmes = { nome: "Road to Damascus  ", url: "tt13313630" },
    e76filmes = { nome: "The Winter Lake  ", url: "tt9778348" },
    e77filmes = { nome: "The Canyonlands  ", url: "tt10245776" },
    e78filmes = { nome: "Slaxx  ", url: "tt9741310" },
    e79filmes = { nome: "Silenciadas  ", url: "tt9916362" },
    e80filmes = { nome: "O Recepcionista  ", url: "tt7979142" },
    e81filmes = { nome: "O Mistério de Block Island  ", url: "tt8747160" },
    e82filmes = { nome: "Mortal  ", url: "tt5715066" },
    e83filmes = { nome: "Filhos de Istambul  ", url: "tt13045890" },
    e84filmes = { nome: "Dia do Sim  ", url: "tt8521876" },
    e85filmes = { nome: "Cherry - Inocência Perdida  ", url: "tt9130508" },
    e86filmes = { nome: "A Arte de Ser Adulto  ", url: "tt9686708" },
    e87filmes = { nome: "Dark Web: Cicada    ", url: "tt8110246" },
    e88filmes = { nome: "Feitiço  ", url: "tt10736580" },
    e89filmes = { nome: "Don Oscar  ", url: "tt13248198" },
    e90filmes = { nome: "Archive  ", url: "tt6882604" },
    e91filmes = { nome: "Um Príncipe em Nova York   ", url: "tt6802400" },
    e92filmes = { nome: "Freaky: No Corpo de um Assassino  ", url: "tt10919380" },
    e93filmes = { nome: "A Sentinela  ", url: "tt11734264" },
    e94filmes = { nome: "Raya e o Último Dragão  ", url: "tt5109280" },
    e95filmes = { nome: "Moxie: Quando as Garotas Vão À Luta  ", url: "tt6432466" },
    e96filmes = { nome: "A Viúva das Sombras  AUDIO CINEMA ", url: "tt12057234" },
    e97filmes = { nome: "A Garota no Trem  ", url: "tt8907992" },
    e98filmes = { nome: "Raízes do Amor  ", url: "tt6489562" },
    e99filmes = { nome: "M-: Quando a Morte Socorre a Vida  ", url: "tt11321572" },
    e100filmes = { nome: "Loucura de Amor  ", url: "tt11698630" },
    f1filmes = { nome: "Duas Tias Loucas de Férias  ", url: "tt3797512" },
    f2filmes = { nome: "Corretores de corpos  ", url: "tt9585676" },
    f3filmes = { nome: "Becky  ", url: "tt10314450" },
    f4filmes = { nome: "Adeus, Professor  ", url: "tt6865690" },
    f5filmes = { nome: "A Cabeça de Gumercindo Saraiva  ", url: "tt7644928" },
    f6filmes = { nome: " Bullets  ", url: "tt11350284" },
    f7filmes = { nome: "Perigosa Semelhança  ", url: "tt11191344" },
    f8filmes = { nome: "Para Garotas de Cor  ", url: "tt1405500" },
    f9filmes = { nome: "Todos os Mortos  ", url: "tt8845322" },
    f10filmes = { nome: "A Caixa de Pandora  ", url: "tt8364138" },
    f11filmes = { nome: "Pelé  ", url: "tt13842562" },
    f12filmes = { nome: "Medo da Chuva  ", url: "tt10037014" },
    f13filmes = { nome: "Eu Me Importo  ", url: "tt9893250" },
    f14filmes = { nome: "Flora e Ulysses  ", url: "tt8521736" },
    f15filmes = { nome: "BIA: Um Mundo do Avesso  ", url: "tt13597388" },
    f16filmes = { nome: "Willys Wonderland  ", url: "tt8114980" },
    f17filmes = { nome: "O Homem Certo  ", url: "tt6820128" },
    f18filmes = { nome: "Judas e o Messias Negro  ", url: "tt9784798" },
    f19filmes = { nome: "Tom  Jerry - O Filme / ", url: "tt1361336" },
    f20filmes = { nome: "Breve Miragem de Sol  ", url: "tt9095296" },
    f21filmes = { nome: "Eleições  ", url: "tt10026730" },
    f22filmes = { nome: "Super Urso: Um Resgate na Cidade Grande  ", url: "tt9074406" },
    f23filmes = { nome: "Instinto  ", url: "tt8386898" },
    f24filmes = { nome: "Amor²  ", url: "tt13846542" },
    f25filmes = { nome: "Xico, O Cachorro Mágico  ", url: "tt12481806" },
    f26filmes = { nome: "O Mapa das Pequenas Coisas Perfeitas  ", url: "tt11080108" },
    f27filmes = { nome: "Bliss: Em Busca da Felicidade  ", url: "tt10333426" },
    f28filmes = { nome: "Para todos os garotos: Agora e para sempre  ", url: "tt10676012" },
    f29filmes = { nome: "Virus Shark  ", url: "tt13785940" },
    f30filmes = { nome: "Relatos do Mundo  ", url: "tt6878306" },
    f31filmes = { nome: "Ponto Vermelho  ", url: "tt11307814" },
    f32filmes = { nome: "RIA  ", url: "tt9126944" },
    f33filmes = { nome: "Revelação do Agente  ", url: "tt8955940" },
    f34filmes = { nome: "The Reckoning  ", url: "tt9182964" },
    f35filmes = { nome: "O Resgate  ", url: "tt1793239" },
    f36filmes = { nome: "A Vida em um Ano  ", url: "tt6598238" },
    f37filmes = { nome: "A Febre  ", url: "tt10603466" },
    f38filmes = { nome: " Days to Live  ", url: "tt10949778" },
    f39filmes = { nome: "Horas Decisivas  ", url: "tt2025690" },
    f40filmes = { nome: "Twist - ", url: "tt10077034" },
    f41filmes = { nome: "O Último Paraíso  ", url: "tt11428926" },
    f42filmes = { nome: "Nova Ordem Espacial  ", url: "tt12838766" },
    f43filmes = { nome: "Pole Dance: Dança do Poder Dub ", url: "tt13787118" },
    f44filmes = { nome: "Mestres do Yin-Yang: O Sonho da Eternidade  ", url: "tt11454718" },
    f45filmes = { nome: "Skull: A Máscara de Anhangá  ", url: "tt8447170" },
    f46filmes = { nome: "O Mediador  ", url: "tt9660688" },
    f47filmes = { nome: "Face Oculta  ", url: "tt1188113" },
    f48filmes = { nome: "O Preço do Talento  ", url: "tt8151874" },
    f49filmes = { nome: "A Ira de Cain  ", url: "tt1465519" },
    f50filmes = { nome: "Todos os Meus Amigos Estão Mortos  ", url: "tt13723064" },
    f51filmes = { nome: "Pânico Abaixo de Zero  ", url: "tt8945942" },
    f52filmes = { nome: "O Cemitério das Almas Perdidas  ", url: "tt13032562" },
    f53filmes = { nome: "O º Andar: Terror na Rua Malasana  ", url: "tt10952782" },
    f54filmes = { nome: "The Ultimate Playlist of Noise  ", url: "tt11268742" },
    f55filmes = { nome: "O Cara Perfeito  ", url: "tt3862750" },
    f56filmes = { nome: "Free Fire - O Tiroteio  ", url: "tt4158096" },
    f57filmes = { nome: "Palmer hd-dub ", url: "tt6857376" },
    f58filmes = { nome: "Justiça Brutal  ", url: "tt6491178" },
    f59filmes = { nome: "A Escavação  ", url: "tt3661210" },
    f60filmes = { nome: "Em busca de Ohana  ", url: "tt10332588" },
    f61filmes = { nome: "Billy The Kid: O Fora da Lei ", url: "tt4975920" },
    f62filmes = { nome: "Uma Última Vez  ", url: "tt5327410" },
    f63filmes = { nome: "Sombras do Terror  ", url: "tt8236366" },
    f64filmes = { nome: "O Caçador de Recompensas  ", url: "tt9302994" },
    f65filmes = { nome: "Terra de Ninguém  ", url: "tt10449052" },
    f66filmes = { nome: "Bloody Hell  ", url: "tt9772374" },
    f67filmes = { nome: "Minha Querida Nora  ", url: "tt10965792" },
    f68filmes = { nome: "Abaixo de Zero  ", url: "tt9845564" },
    f69filmes = { nome: "Pinóquio / ", url: "tt8333746" },
    f70filmes = { nome: "Alemão  ", url: "tt3527550" },
    f71filmes = { nome: "Godzilla vs Kong  ", url: "tt5034838" },
    f72filmes = { nome: "Posto de Combate  ", url: "tt3833480" },
    f73filmes = { nome: "Um Caso de Detetive  ", url: "tt8980602" },
    f74filmes = { nome: "Mais Um Verão Com Mamãe  ", url: "tt7343740" },
    f75filmes = { nome: "Cabana da Possessão  ", url: "tt3763748" },
    f76filmes = { nome: "Assassinos Sádicos  ", url: "tt8764358" },
    f77filmes = { nome: "Terra Selvagem  ", url: "tt8710596" },
    f78filmes = { nome: "O Ataque dos Vermes Malditos   ", url: "tt8322060" },
    f79filmes = { nome: "O Tigre Branco  ", url: "tt6571548" },
    f80filmes = { nome: "Isolado na Pandemia  ", url: "tt10192566" },
    f81filmes = { nome: "Hunted  ", url: "tt10011228" },
    f82filmes = { nome: "Foxtrot Six  ", url: "tt8948208" },
    f83filmes = { nome: "Born a Champion  ", url: "tt10661710" },
    f84filmes = { nome: "O Tempo com Você  ", url: "tt9426210" },
    f85filmes = { nome: "Destruição Final: O Último Refúgio  ", url: "tt7737786" },
    f86filmes = { nome: "Mestre Z: O Legado de Ip Man  ", url: "tt7262882" },
    f87filmes = { nome: "Clouds  ", url: "tt6473066" },
    f88filmes = { nome: "Guerra de Algodão  ", url: "tt8420588" },
    f89filmes = { nome: "O Massacre  ", url: "tt5822712" },
    f90filmes = { nome: "Redemption Day  ", url: "tt4439620" },
    f91filmes = { nome: "Mazhor Film  ", url: "tt13786474" },
    f92filmes = { nome: "Lena and Snowball  ", url: "tt9765840" },
    f93filmes = { nome: "O Elevador  ", url: "tt7685962" },
    f94filmes = { nome: "Pai em Dobro  ", url: "tt11821818" },
    f95filmes = { nome: "Batman: Alma do Dragão  ", url: "tt12885852" },
    f96filmes = { nome: "Uma Noite em Miami  ", url: "tt10612922" },
    f97filmes = { nome: "Zona de Combate  ", url: "tt10451914" },
    f98filmes = { nome: "Como Construir uma Garota  ", url: "tt4193072" },
    f99filmes = { nome: "Convenção das Bruxas  ", url: "tt0805647" },
    f100filmes = { nome: "The Serpent  ", url: "tt6984230" },
    g1filmes = { nome: "Shadow in the Cloud / ", url: "tt9691136" },
    g2filmes = { nome: "As Faces do Demônio  ", url: "tt10800758" },
    g3filmes = { nome: "Algorithm: BLISS  ", url: "tt3212608" },
    g4filmes = { nome: "Um Dia de Chuva em Nova York  ", url: "tt7139936" },
    g5filmes = { nome: "Strain   ", url: "tt5170778" },
    g6filmes = { nome: "Palavras de Família  ", url: "tt5068162" },
    g7filmes = { nome: "O Jovem Kieslowski  ", url: "tt2912120" },
    g8filmes = { nome: "A Mãe Errada  ", url: "tt10452066" },
    g9filmes = { nome: " Horas Para o Natal  ", url: "tt10806050" },
    g10filmes = { nome: "Tony Parker  Entre os Maiores  ", url: "tt13696668" },
    g11filmes = { nome: "The Matchmakers Playbook  ", url: "568650944" },
    g12filmes = { nome: "Bill  Ted: Encare a Música  ", url: "tt1086064" },
    g13filmes = { nome: "Jogos Entre Amigos  ", url: "tt7070818" },
    g14filmes = { nome: "Céu em Chamas  ", url: "tt9203190" },
    g15filmes = { nome: "Skylines  ", url: "tt9387250" },
    g16filmes = { nome: "Rogue Warfare - Ameaça Global  ", url: "tt5266668" },
    g17filmes = { nome: "O Dom da Serpente  ", url: "tt6814214" },
    g18filmes = { nome: "O Amor de Sylvie  ", url: "tt9827834" },
    g19filmes = { nome: "Ninguém Brinca com Jesus Quintana  ", url: "tt5974030" },
    g20filmes = { nome: "Monsters of Man  ", url: "tt6456326" },
    g21filmes = { nome: "Legado Explosivo / ", url: "tt1838556" },
    g22filmes = { nome: "High School Musical: O Musical: Especial de Festas  ", url: "tt13290168" },
    g23filmes = { nome: "Duelo no Asfalto  ", url: "tt6527456" },
    g24filmes = { nome: "Uma Sereia em Paris  ", url: "tt9209312" },
    g25filmes = { nome: "Palavras nas Paredes do Banheiro / ", url: "tt8045906" },
    g26filmes = { nome: " -/ ", url: "tt1918734" },
    g27filmes = { nome: "Os Croods : Uma Nova Era - ", url: "tt2850386" },
    g28filmes = { nome: "O Último Turno  ", url: "tt10661180" },
    g29filmes = { nome: "O Caminho de Volta  ", url: "tt8544498" },
    g30filmes = { nome: "Natal Sempre e Para Sempre  ", url: "tt10921256" },
    g31filmes = { nome: "Loucuras de Verão  ", url: "tt10492998" },
    g32filmes = { nome: "Disappearance at Clifton Hill  ", url: "tt5919756" },
    g33filmes = { nome: "Darling Nikki  ", url: "tt1996226" },
    g34filmes = { nome: "Soul  ", url: "tt2948372" },
    g35filmes = { nome: "Pequenos Grandes Heróis  ", url: "tt10600398" },
    g36filmes = { nome: "Em Um Relacionamento Sério  ", url: "tt6676028" },
    g37filmes = { nome: "Capital Humano  ", url: "tt9185066" },
    g38filmes = { nome: "Flutuação  ", url: "tt5045746" },
    g39filmes = { nome: "A Árvore dos Desejos  ", url: "tt9239422" },
    g40filmes = { nome: "O Céu da Meia-Noite  ", url: "tt10539608" },
    g41filmes = { nome: "Jovens Bruxas: Nova Irmandade  ", url: "tt4685762" },
    g42filmes = { nome: "Um Brinde ao Natal  ", url: "tt13055780" },
    g43filmes = { nome: "Sibéria  ", url: "tt4687856" },
    g44filmes = { nome: "Mais Outro Filho  ", url: "tt10937670" },
    g45filmes = { nome: "Enquanto Estivermos Juntos  ", url: "tt9779516" },
    g46filmes = { nome: "Submissão  ", url: "tt4824256" },
    g47filmes = { nome: "Encontro Criminoso  ", url: "tt9736976" },
    g48filmes = { nome: "Duas por Uma  ", url: "tt7970348" },
    g49filmes = { nome: "Contra o Relógio  ", url: "tt3813094" },
    g50filmes = { nome: "Break: O Poder da Dança hd-dub ", url: "tt7343574" },
    g51filmes = { nome: "Army of One  ", url: "tt7153488" },
    g52filmes = { nome: "A Voz Suprema do Blues  ", url: "tt10514222" },
    g53filmes = { nome: "A Vingança da Babá  ", url: "tt6638398" },
    g54filmes = { nome: "A Mulher Milagrosa  ", url: "tt8456696" },
    g55filmes = { nome: "A Face da Verdade  ", url: "tt9477066" },
    g56filmes = { nome: "Um Casamento a Mais  ", url: "tt8367184" },
    g57filmes = { nome: "Alguém Avisa?  ", url: "tt8522006" },
    g58filmes = { nome: "Amor de Balada  ", url: "tt10358022" },
    g59filmes = { nome: "O Candidato  ", url: "tt70954821" },
    g60filmes = { nome: "Banana Split  ", url: "tt7755856" },
    g61filmes = { nome: "O Candidato  ", url: "tt7095482" },
    g62filmes = { nome: "Em Busca da Fama  ", url: "tt7703924" },
    g63filmes = { nome: "O Guardião dos Mundos  ", url: "tt6270596" },
    g64filmes = { nome: "Ip Man: O Mestre do Kung Fu  ", url: "tt12567246" },
    g65filmes = { nome: "Wolfwalkers  ", url: "tt5198068" },
    g66filmes = { nome: "Vombate ao Combate  ", url: "tt9679528" },
    g67filmes = { nome: "Por Amor ou Por Dinheiro  ", url: "tt7051624" },
    g68filmes = { nome: "O Natal do Zé Coleta  ", url: "tt13458584" },
    g69filmes = { nome: "No Gogó do Paulinho  ", url: "tt9914192" },
    g70filmes = { nome: "O Star Wars: Especial de Festas  ", url: "tt12885438" },
    g71filmes = { nome: "Jiu Jitsu / ", url: "tt9624766" },
    g72filmes = { nome: "Inversão  ", url: "tt1539302" },
    g73filmes = { nome: "Elliot: Uma História de Natal  ", url: "tt4177856" },
    g74filmes = { nome: "Safety  ", url: "tt10649016" },
    g75filmes = { nome: "Abra Suas Asas  ", url: "tt10204940" },
    g76filmes = { nome: "A Incrível História da Ilha das Rosas  ", url: "tt10287954" },
    g77filmes = { nome: "Às Cegas  ", url: "tt10303430" },
    g78filmes = { nome: "Sou Sua Mulher  ", url: "tt10243992" },
    g79filmes = { nome: "Destemida  ", url: "tt11692986" },
    g80filmes = { nome: "Era Uma Vez um Boneco de Neve  ", url: "tt13061790" },
    g81filmes = { nome: "Blind  Eu Estou Aqui  ", url: "tt10504904" },
    g82filmes = { nome: "Fada Madrinha  ", url: "tt11681250" },
    g83filmes = { nome: "Forças Malignas  ", url: "tt6143782" },
    g84filmes = { nome: "Tudo Bem no Natal Que Vem  ", url: "tt13354204" },
    g85filmes = { nome: "Monster Hunter / ", url: "tt6475714" },
    g86filmes = { nome: "Tubarão Assassino  ", url: "tt8305692" },
    g87filmes = { nome: "Entre Armas e Brinquedos  ", url: "tt10310140" },
    g88filmes = { nome: "Espontânea  ", url: "tt5774062" },
    g89filmes = { nome: "Echo Boomers  ", url: "tt4353270" },
    g90filmes = { nome: "Tenet  ", url: "tt6723592" },
    g91filmes = { nome: "Natal Sob Fogo Cruzado  ", url: "tt13446424" },
    g92filmes = { nome: "Rogue Warfare : A Morte de uma Nação  ", url: "tt7983744" },
    g93filmes = { nome: "Quando Você Chegou  ", url: "tt4859168" },
    g94filmes = { nome: "Estranho Mas Verdade  ", url: "tt2866708" },
    g95filmes = { nome: "Um Verão Para Recordar  ", url: "tt10941890" },
    g96filmes = { nome: "Guerra Sem Fim: A Espada é a Lei  ", url: "tt12484058" },
    g97filmes = { nome: "Como Sair de Buffalo  ", url: "tt8647310" },
    g98filmes = { nome: "O Cobrador de Impostos  ", url: "tt8461224" },
    g99filmes = { nome: "Crime e Desejo  ", url: "tt5688068" },
    g100filmes = { nome: "Jogo Assassino  ", url: "tt6533240" },
    h1filmes = { nome: "Big Time Adolescence  ", url: "tt3824648" },
    h2filmes = { nome: "A Rosa Venenosa  ", url: "tt5862166" },
    h3filmes = { nome: "O Presente de Natal de Angela  ", url: "tt13260836" },
    h4filmes = { nome: "Spycies: Agentes Selvagens  ", url: "tt8028842" },
    h5filmes = { nome: "The Silencing  ", url: "tt7149730" },
    h6filmes = { nome: "Fukushima - Ameaça Nuclear  ", url: "tt9318772" },
    h7filmes = { nome: "Ava  ", url: "tt8784956" },
    h8filmes = { nome: "Disrupted  ", url: "tt6829882" },
    h9filmes = { nome: "Sem Seu Sangue  ", url: "tt10222752" },
    h10filmes = { nome: "Lentes do Mal  ", url: "tt1331307" },
    h11filmes = { nome: "Bloodrayne   O Terceiro Reich  ", url: "tt1153546" },
    h12filmes = { nome: "Bloodrayne  - Libertação  ", url: "tt0896036" },
    h13filmes = { nome: "BloodRayne  ", url: "tt0383222" },
    h14filmes = { nome: "Vozes  ", url: "tt11750282" },
    h15filmes = { nome: "O Mistério do Convento : Caçadora de Almas  ", url: "tt10053426" },
    h16filmes = { nome: "Brinquedos do Terror  ", url: "tt13316062" },
    h17filmes = { nome: "A Ligação  ", url: "tt10530176" },
    h18filmes = { nome: "Procurada  ", url: "tt3984356" },
    h19filmes = { nome: "A Fera  ", url: "tt11499506" },
    h20filmes = { nome: "Zeroville  ", url: "tt1881109" },
    h21filmes = { nome: "Cidade da Garganta Cortada  ", url: "tt3547306" },
    h22filmes = { nome: "Mosul  ", url: "tt8354112" },
    h23filmes = { nome: "Nosso Amor  ", url: "tt6012380" },
    h24filmes = { nome: "Tio Frank  ", url: "tt11327514" },
    h25filmes = { nome: "A Princesa e a Plebeia: Nova Aventura  ", url: "tt11199410" },
    h26filmes = { nome: "O Mistério de Silver Lake  ", url: "tt5691670" },
    h27filmes = { nome: "O X do Natal  ", url: "tt11332750" },
    h28filmes = { nome: "Projeto Mercury: Os Sete Escolhidos  ", url: "tt13237174" },
    h29filmes = { nome: "Verdade e Honra  ", url: "tt0783640" },
    h30filmes = { nome: "A Bruxa na Janela  ", url: "tt5936492" },
    h31filmes = { nome: "SOS Survive or Sacrifice  ", url: "tt10852686" },
    h32filmes = { nome: "As Duas Irenes  ", url: "tt6289724" },
    h33filmes = { nome: "Missão Presente de Natal  ", url: "tt13236566" },
    h34filmes = { nome: "Haven's End  ", url: "tt6410712" },
    h35filmes = { nome: "Greatland  ", url: "tt8215480" },
    h36filmes = { nome: "Eclipse: The Rise of Ink  ", url: "tt8206646" },
    h37filmes = { nome: "Anthropocene  ", url: "tt12345596" },
    h38filmes = { nome: "A Menininha  ", url: "tt5127206" },
    h39filmes = { nome: "A Christmas Gift from Bob  ", url: "tt9564270" },
    h40filmes = { nome: "O Bastardo  ", url: "tt7524624" },
    h41filmes = { nome: "Esquadrão Lobo  ", url: "tt8197998" },
    h42filmes = { nome: "Rosa e Momo  ", url: "tt10627584" },
    h43filmes = { nome: "Uma Invenção de Natal  ", url: "tt7736496" },
    h44filmes = { nome: "A Casa Monstro  ", url: "tt0385880" },
    h45filmes = { nome: "Abaixo de Nós  ", url: "tt5092484" },
    h46filmes = { nome: "Armas em Jogo  ", url: "tt6902676" },
    h47filmes = { nome: "Quando a Vida Acontece  ", url: "tt13279528" },
    h48filmes = { nome: "Ursos Sem Curso: O Filme  ", url: "tt10474606" },
    h49filmes = { nome: "Alma de Guerreiro  ", url: "tt7718636" },
    h50filmes = { nome: "Buffalo Boys  ", url: "tt6917210" },
    h51filmes = { nome: "A Verdadeira História de Ned Kelly  ", url: "tt4844140" },
    h52filmes = { nome: "Sonho Olímpico  ", url: "tt8964214" },
    h53filmes = { nome: "Luta Pela Fé  ", url: "tt9075778" },
    h54filmes = { nome: "Broken Law  ", url: "tt5984744" },
    h55filmes = { nome: "Ficar com Você  ", url: "tt8092252" },
    h56filmes = { nome: "Abraço   ", url: "tt11949064" },
    h57filmes = { nome: "Espada de Deus - A Última Cruzada  ", url: "tt7240616" },
    h58filmes = { nome: "Muito Além do Ordinário  ", url: "tt8233874" },
    h59filmes = { nome: "O Instituto de Mágica  ", url: "tt3979300" },
    h60filmes = { nome: "Por Uma Vida Melhor  ", url: "tt9725830" },
    h61filmes = { nome: "Em Busca do Castelo Dourado  ", url: "tt7945440" },
    h62filmes = { nome: "Capturado  ", url: "tt7221772" },
    h63filmes = { nome: "Volume Morto  ", url: "tt8002834" },
    h64filmes = { nome: "The Forty-Year-Old Version  ", url: "tt10642834" },
    h65filmes = { nome: "Os  de Chicago  ", url: "tt1070874" },
    h66filmes = { nome: "O Farol The Lighthouse ", url: "tt7984734" },
    h67filmes = { nome: "Natal No Palácio  ", url: "tt9033632" },
    h68filmes = { nome: "Bob Esponja: O Incrível Resgate  ", url: "tt4823776" },
    h69filmes = { nome: "Rainha de Copas  ", url: "tt8378126" },
    h70filmes = { nome: "Vampire Virus  ", url: "tt10960976" },
    h71filmes = { nome: "A Galeria dos corações partidos - ", url: "tt2140571" },
    h72filmes = { nome: "Bina - The Antenna   ", url: "tt8997180" },
    h73filmes = { nome: "Skydog  ", url: "tt11707848" },
    h74filmes = { nome: "Sem Conexão  ", url: "tt11240506" },
    h75filmes = { nome: "Ne Zha  ", url: "tt10627720" },
    h76filmes = { nome: "Don't Look Back  ", url: "tt10418846" },
    h77filmes = { nome: "Blue Ridge  ", url: "tt11695190" },
    h78filmes = { nome: "Amor com Data Marcada  ", url: "tt9866072" },
    h79filmes = { nome: "A Resistência  ", url: "tt1343703" },
    h80filmes = { nome: "Convidado Vitalicio  ", url: "tt7645122" },
    h81filmes = { nome: "Rogue City  ", url: "tt10127684" },
    h82filmes = { nome: "O Que Ficou Para Trás  ", url: "tt8508734" },
    h83filmes = { nome: "They Live Inside Us  ", url: "tt8327630" },
    h84filmes = { nome: "O Telefone do Vento  ", url: "tt10167422" },
    h85filmes = { nome: "The Mortuary Collection  ", url: "tt7781432" },
    h86filmes = { nome: "The Devil Has a Name  ", url: "tt7894510" },
    h87filmes = { nome: "Termination  ", url: "tt10319676" },
    h88filmes = { nome: "A Redenção  ", url: "tt10218674" },
    h89filmes = { nome: "O Ajudante de Satã  ", url: "tt0380687" },
    h90filmes = { nome: "A Espiã  ", url: "tt8435308" },
    h91filmes = { nome: "A Batida Perfeita  ", url: "tt9308382" },
    h92filmes = { nome: "A Porteira - ", url: "tt6222118" },
    h93filmes = { nome: "A Caminho da Lua  ", url: "tt7488208" },
    h94filmes = { nome: "Borat: Fita de Cinema Seguinte  ", url: "tt13143964" },
    h95filmes = { nome: "Line Walker : Espião Invisível  ", url: "tt10295602" },
    h96filmes = { nome: "Bullets of Justice  ", url: "tt6421398" },
    h97filmes = { nome: "Amor e Monstros / ", url: "tt2222042" },
    h98filmes = { nome: "Kadaver  ", url: "tt11284280" },
    h99filmes = { nome: "Ventos da Liberdade  ", url: "tt7125774" },
    h100filmes = { nome: "Em Busca do Paraíso  ", url: "tt5167200" },
    i1filmes = { nome: "Agente Infiltrada  ", url: "tt8000718" },
    i2filmes = { nome: "Sem Perdão  ", url: "tt7394636" },
    i3filmes = { nome: "Halloween Party  ", url: "tt6250650" },
    i4filmes = { nome: "A Última Jornada  ", url: "tt4157728" },
    i5filmes = { nome: "Manual de Caça a Monstros  ", url: "tt4844150" },
    i6filmes = { nome: "Parts Unknown  ", url: "tt5759188" },
    i7filmes = { nome: "Não Vamos Pagar Nada  ", url: "tt11150412" },
    i8filmes = { nome: "Archons  ", url: "tt5790218" },
    i9filmes = { nome: "Meu Amigo Robô  ", url: "tt10397854" },
    i10filmes = { nome: "The Missing Sister  ", url: "tt9241780" },
    i11filmes = { nome: "O Braço Direito  ", url: "tt10429766" },
    i12filmes = { nome: "Criminal Audition  ", url: "tt4157712" },
    i13filmes = { nome: "Trump vs the Illuminati  ", url: "tt12969958" },
    i14filmes = { nome: "Carmilla  ", url: "tt7280218" },
    i15filmes = { nome: "The Devil to Pay  ", url: "tt7631568" },
    i16filmes = { nome: "Noturno  ", url: "tt11044858" },
    i17filmes = { nome: "Mau-olhado  ", url: "tt12882620" },
    i18filmes = { nome: "Ben  Contra o Universo: O Filme  ", url: "tt13186528" },
    i19filmes = { nome: "Embriagado de Amor  ", url: "tt0272338" },
    i20filmes = { nome: "O Chalé  ", url: "tt7347846" },
    i21filmes = { nome: "SWAT: Força Letal  ", url: "tt9243442" },
    i22filmes = { nome: "Nekrotronic  ", url: "tt7453418" },
    i23filmes = { nome: "Contos do Caçador de Sombras  ", url: "tt7587984" },
    i24filmes = { nome: "Do Not Reply  ", url: "tt8168992" },
    i25filmes = { nome: "Death of Me  ", url: "tt1830643" },
    i26filmes = { nome: "Copper Bill  ", url: "tt10529644" },
    i27filmes = { nome: "O Halloween do Hubie  ", url: "tt10682266" },
    i28filmes = { nome: " Hour Shift  ", url: "tt10309552" },
    i29filmes = { nome: "Pegadas na Neve  ", url: "tt10674930" },
    i30filmes = { nome: "Música Para Morrer de Amor  ", url: "tt8390616" },
    i31filmes = { nome: "Caixa Preta  ", url: "tt12298506" },
    i32filmes = { nome: "Awake - A Vida por um Fio  ", url: "tt0211933" },
    i33filmes = { nome: "Agentes Vanguard  ", url: "tt9695722" },
    i34filmes = { nome: "Morte Súbita   ", url: "tt10804786" },
    i35filmes = { nome: "Um Casal Quase Perfeito   ", url: "tt1110626" },
    i36filmes = { nome: "Spiral  ", url: "tt9247314" },
    i37filmes = { nome: "Como Cães e Gatos : Peludos Unidos!  ", url: "tt12745164" },
    i38filmes = { nome: "Teste de Paternidade  ", url: "tt13118012" },
    i39filmes = { nome: "O Fascínio  ", url: "tt10914452" },
    i40filmes = { nome: "Vampiros X The Bronx  ", url: "tt8976576" },
    i41filmes = { nome: "Cidade de Deus  ", url: "tt0317248" },
    i42filmes = { nome: "Sangue de Pelicano  ", url: "tt8074340" },
    i43filmes = { nome: "A Gangue - Uma Noite de Terror  ", url: "tt9414574" },
    i44filmes = { nome: "Sociedade Secreta dos Segundos Filhos Reais  ", url: "tt10324122" },
    i45filmes = { nome: "O Mundo Imaginário do Dr Parnassus  ", url: "tt1054606" },
    i46filmes = { nome: "Jovem Aloucada  ", url: "tt2125698" },
    i47filmes = { nome: "A Vida Invisível  ", url: "tt6390668" },
    i48filmes = { nome: "eHero  ", url: "tt3615952" },
    i49filmes = { nome: "Alone  ", url: "tt7711170" },
    i50filmes = { nome: "Lindinhas  ", url: "tt9196192" },
    i51filmes = { nome: "Enola Holmes  ", url: "tt7846844" },
    i52filmes = { nome: "A Princesa Encantada - O Reino da Música  ", url: "tt10551268" },
    i53filmes = { nome: "Hooking Up  ", url: "tt9815998" },
    i54filmes = { nome: "The Batman  trailer ", url: "tt1877830" },
    i55filmes = { nome: "Villain  ", url: "tt9820352" },
    i56filmes = { nome: "The Last Laugh  ", url: "tt8333418" },
    i57filmes = { nome: "Sete Anos em Maio  ", url: "tt11327962" },
    i58filmes = { nome: "Intersect  ", url: "tt4205718" },
    i59filmes = { nome: "Fear Pharm  ", url: "tt9191844" },
    i60filmes = { nome: "I Met a Girl  ", url: "tt9731360" },
    i61filmes = { nome: "Evil Takes Root  ", url: "tt7830416" },
    i62filmes = { nome: "Conjuring the Devil  ", url: "tt7904362" },
    i63filmes = { nome: "Tread  ", url: "tt5807330" },
    i64filmes = { nome: "The Coming  ", url: "tt10926356" },
    i65filmes = { nome: "Rent-A-Pal  ", url: "tt12274228" },
    i66filmes = { nome: "Paranormal Attraction  ", url: "tt10223876" },
    i67filmes = { nome: "Cranston Academy: Monster Zone  ", url: "tt8524650" },
    i68filmes = { nome: "Battle of Defense    ", url: "tt13106934" },
    i69filmes = { nome: "Archaon: The Halloween Summoning  ", url: "tt13015496" },
    i70filmes = { nome: "Amuleto  ", url: "tt8332802" },
    i71filmes = { nome: "O Olho e a Faca  ", url: "tt10062650" },
    i72filmes = { nome: "Remédio Amargo  ", url: "tt11127690" },
    i73filmes = { nome: "The Day Shall Come  ", url: "tt7078658" },
    i74filmes = { nome: "Super Monstros Turma Nova  ", url: "tt12730290" },
    i75filmes = { nome: "Mudança no Jogo  ", url: "tt5992138" },
    i76filmes = { nome: "O Diabo de Cada Dia  ", url: "tt7395114" },
    i77filmes = { nome: "Um Milhão de Maneiras de Pegar na Pistola  ", url: "tt2557490" },
    i78filmes = { nome: "Ela   ", url: "tt1798709" },
    i79filmes = { nome: "Esquadrão   ", url: "tt5475734" },
    i80filmes = { nome: "Primeiro Amor  ", url: "tt10228168" },
    i81filmes = { nome: "Operação Obscura hd-dub ", url: "tt8179024" },
    i82filmes = { nome: "Nível Hard  ", url: "tt8675288" },
    i83filmes = { nome: "O Ritmo da Selva: O Filme  ", url: "tt12139700" },
    i84filmes = { nome: "Arma Secreta  ", url: "tt10985590" },
    i85filmes = { nome: "A Babá: Rainha da Morte  ", url: "tt11024272" },
    i86filmes = { nome: "Decisão  ", url: "tt8776686" },
    i87filmes = { nome: "Newness", url: "tt6408226" },
    i88filmes = { nome: "Arsenal  ", url: "tt5580536" },
    i89filmes = { nome: "After - Depois da Verdade  ", url: "tt10362466" },
    i90filmes = { nome: "Origens Secretas  ", url: "tt5827790" },
    i91filmes = { nome: "Rio   ", url: "tt2357291" },
    i92filmes = { nome: "Rio  ", url: "tt1436562" },
    i93filmes = { nome: "Reféns  ", url: "tt1674784" },
    i94filmes = { nome: "Rejeitados pelo Diabo  ", url: "tt0395584" },
    i95filmes = { nome: "Tirando a Maior Onda: O Filme  ", url: "tt9208444" },
    i96filmes = { nome: "Freaks: Um de Nós  ", url: "tt12875782" },
    i97filmes = { nome: "Rogue ", url: "tt11576124" },
    i98filmes = { nome: "O Segredo: Ouse Sonhar  ", url: "tt4411584" },
    i99filmes = { nome: "Os Novos Mutantes  ", url: "tt4682266" },
    i100filmes = { nome: "ViihTube: Amiga do Inimigo  ", url: "tt12585124" },
]
//let UrlBaseFilmes = "https://embed.querofilmeshd.co/"
let UrlBaseFilmes = "https://player.uauflix.online/" 
let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
let APIKEY = "5417af578f487448df0d4932bc0cc1a5"
let qnt = 50
let inicioQntfilme = 0
let fimQntfilme = qnt
let pagcont = 1

document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${Math.ceil(arryBilhioteca.length/qnt)}`

function nextPage() {
    if (fimQntfilme < arryBilhioteca.length) {
        pagcont++
        document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${Math.ceil(arryBilhioteca.length/qnt)}`
        inicioQntfilme += qnt
        fimQntfilme += qnt
        add()
        if (document.getElementById("conteinerLastview")) {
            const ocutar1 = document.getElementById("conteinerLastview");
            ocutar1.remove();
        }
    }
}

function backPage() {
    if (inicioQntfilme >= qnt) {
        pagcont--
        document.getElementById('pagcont').innerHTML = `P. ${pagcont}/${Math.ceil(arryBilhioteca.length/qnt)}`
        inicioQntfilme -= qnt
        fimQntfilme -= qnt
        add()
        if (document.getElementById("conteinerLastview")) {
            const ocutar1 = document.getElementById("conteinerLastview");
            ocutar1.remove();
        }
    }
}
exibirLastView()

function exibirLastView() {
    if (localStorage.lastViewFilme != undefined) {
        let nomeLastView = JSON.parse(localStorage.getItem("lastViewFilme")).nome
        let URLLastView = JSON.parse(localStorage.getItem("lastViewFilme")).url
        console.log("existe")
        getConfig()
        
        function getConfig() {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
            fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
            })
            .catch(function(err) {
                alert(err);
            });
        }
        runSearch(nomeLastView)
        
        function runSearch(keyword) {
            let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result => result.json())
            .then((data) => {
                const resultado = data.results[0]
                const poster_path = baseImageURL + "w342" + resultado.poster_path
                const original_title = resultado.original_title
                const popularity = parseInt(Math.ceil(resultado.popularity))
                if (data.results[0] != null && data.results[0] != undefined) {
                    document.getElementById('lv').innerHTML += `
                    <div id="lastView">
                    <img id="cardLastView" src="${poster_path}" onclick="filmes()" nome="${nomeLastView}" value="${URLLastView}">
                    </div> 
                    `
                }
            })
        }
    }
}
add()

function add() {
    document.getElementById('cards').innerHTML = ""
    for (let h = inicioQntfilme; h < fimQntfilme; h++) {
        let buscarFilme = arryBilhioteca[h].nome
        let urlVideo = arryBilhioteca[h].url
        getConfig()
        
        function getConfig() {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
            fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
            })
            .catch(function(err) {
                alert(err);
            });
        }
        runSearch(buscarFilme)
        
        function runSearch(keyword) {
            let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result => result.json())
            .then((data) => {
                const resultado = data.results[0]
                const poster_path = baseImageURL + "w342" + resultado.poster_path
                const original_title = resultado.original_title
                const popularity = parseInt(Math.ceil(resultado.popularity))
                if (data.results[0] != null && data.results[0] != undefined) {
                    setTimeout(function() {
                        document.getElementById('cards').innerHTML += `
                        <img class="cardposter"  src="${poster_path}" onclick="filmes()" value="${UrlBaseFilmes+urlVideo}" nome="${original_title}">
                        `
                    },50)
                }
            })
        }
        document.addEventListener('DOMContentLoaded', getConfig);
    }
}

function filmeRandom() {
    let numero = parseInt(Math.random() * arryBilhioteca.length)
    arryBilhioteca.splice(numero, 1)
    let nome = arryBilhioteca[numero].nome
    let url = UrlBaseFilmes + arryBilhioteca[numero].url
    lastView()
    
    function lastView() {
        console.log("lastViewFilme")
        const nomeClickado = nome
        const UrlClickado = url
        let dado = {
            nome: nomeClickado,
            url: UrlClickado,
        }
        localStorage.setItem("lastViewFilme", JSON.stringify(dado))
        console.log("localStorage:", JSON.parse(localStorage.getItem("lastViewFilme")))
    }
    const videosFilme = document.getElementById("exibir");
    videosFilme.innerHTML = `                
    <div id="infoEpsodio">                
    <h1>${nome}</h1>
    <a href="index.html">
    <h3 style="padding: 5px">HOME</h3>
    </a>
    <a href="#">
    <h3 style="padding: 5px" onclick="filmeRandom()" style="font-size:10pt ;">ALEATÓRIO</h3>
    </a>
    </div>
    </div>                
    <iframe scrolling="no" class="videos" id="iframe" src="${url}" scrolling="no" allowfullscreen frameborder="0" allow="autoplay; encrypted-media;unmute"></iframe>
    `
    remover()
}

function remover() {
    const ocutar1 = document.getElementById("conteiner");
    ocutar1.remove();
}

function filmes() {
    lastView()
    
    function lastView() {
        console.log("lastViewFilme")
        const nomeClickado = String(event.target.getAttribute("nome"));
        const UrlClickado = String(event.target.getAttribute("value"));
        let dado = {
            nome: nomeClickado,
            url: UrlClickado,
        }
        localStorage.setItem("lastViewFilme", JSON.stringify(dado))
        console.log("localStorage:", JSON.parse(localStorage.getItem("lastViewFilme")))
    }
    const videosFilme = document.getElementById("exibir");
    const filmeUrl = String(event.target.getAttribute("value"))
    const filmenome = String(event.target.getAttribute("nome")).toUpperCase();
    videosFilme.innerHTML = `
    <div id="infoEpsodio">
    <h1>${filmenome}</h1>
    <a href="index.html">
    <h3 style="padding: 5px">HOME</h3>
    </a>
    </div>
    <iframe scrolling="no" class="videos" id="iframe" src="${filmeUrl}" allowfullscreen frameborder="0" allow="autoplay; encrypted-media;unmute">
    </iframe>
    `
    remover()
}
