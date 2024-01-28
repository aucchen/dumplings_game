window.game={"compiled":"{\"title\":\"Dumplings\",\"author\":\"Autumn Chen\",\"ifid\":\"DA2638D4-59FE-4AC3-81D5-49185A58F0F4\",\"content\":\"\",\"scenes\":{\"prevScene\":{\"id\":\"prevScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"prevTopScene\":{\"id\":\"prevTopScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"jumpScene\":{\"id\":\"jumpScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"backSpecialScene\":{\"id\":\"backSpecialScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"returnScene\":{\"id\":\"returnScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"cooking.filling\":{\"id\":\"cooking.filling\",\"title\":\"Filling\",\"isPinnedCard\":true,\"newPage\":true,\"cardImage\":\"img/filling.jpg\",\"viewIf\":{\"$code\":\"return (((((Q['filling'] || 0) > 2) && ((Q['dumplings_made'] || 0)===0)) && ((Q['filling_mixed'] || 0)===0)) && ((Q['has_chives'] || 0)===1));\"},\"tags\":[\"pinnedCard\"],\"options\":[{\"id\":\"@cooking.more_filling\",\"title\":\"There's more to add.\"},{\"id\":\"@cooking.no_more\",\"title\":\"Mix the filling.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"Do you want to finalize the filling? The current ingredients include:\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"wood ears \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"vermicelli \",\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"chives \",\"predicate\":2},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"eggs \",\"predicate\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"spices \",\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"shrimp \",\"predicate\":5},\"\"]},{\"type\":\"paragraph\",\"content\":\"Are you missing anything?\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_wood_ears'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_vermicelli'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_chives'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_eggs'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_spices'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_shrimp'] || 0)===1);\"}}]}},\"em_stuff\":{\"id\":\"em_stuff\",\"type\":\"scene\",\"title\":\"Ask Em about cooking dumplings.\",\"subtitle\":\"It's something to talk about.\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, Em, have you made dumplings before?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, a long time ago,\\\" she says. \\\"After high school my parents said I should study instead of cooking.\\\" A pause. \\\"I used to like cooking. Maybe a bit too much.\\\"\"},{\"type\":\"paragraph\",\"content\":\"...\"},{\"type\":\"paragraph\",\"content\":\"\\\"We're\"},{\"type\":\"paragraph\",\"content\":\"\\\"If I'm going to be your wife, then I'd better learn how to cook.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's heteronormative as fuck.\\\"\"}]},\"main.pantry\":{\"id\":\"main.pantry\",\"title\":\"Pantry\",\"cardImage\":\"img/pantry.jpg\",\"isDeck\":true,\"viewIf\":{\"$code\":\"return (((Q['has_flour'] || 0)===0) || ((Q['filling_mixed'] || 0)===0));\"},\"options\":[{\"id\":\"#pantry\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"status\":{\"id\":\"status\",\"type\":\"scene\",\"title\":\"Status\",\"newPage\":true,\"isSpecial\":true,\"content\":{\"content\":[{\"type\":\"heading\",\"content\":\"Status\"},{\"type\":\"paragraph\",\"content\":[\"Dumplings made: \",{\"type\":\"insert\",\"insert\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Dumpling quality: \",{\"type\":\"conditional\",\"content\":\"To be determined. \",\"predicate\":1},{\"type\":\"conditional\",\"content\":\"Not so good. \",\"predicate\":2},{\"type\":\"conditional\",\"content\":\"Pretty good!\",\"predicate\":3}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['dumplings_made'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['dumpling_quality'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['dumpling_quality'] || 0)===-1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['dumpling_quality'] || 0)===1);\"}}]}},\"root.start_menu\":{\"id\":\"root.start_menu\",\"options\":[{\"id\":\"@root.start\",\"title\":\"Start game\"},{\"id\":\"@root.credits\",\"title\":\"Credits\"}],\"content\":{\"type\":\"heading\",\"content\":\"饺子 (Dumplings)\"}},\"ingredients.flour\":{\"id\":\"ingredients.flour\",\"title\":\"Flour\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/flour.jpg\",\"tags\":[\"pantry\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_flour'] = 1;\"}],\"options\":[{\"id\":\"@ingredients.make_dough\",\"title\":\"Make the dough.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Of course, the flour is past the expiration date.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Do you think it's still good past the expiration date?\\\" you ask. \\\"It's only a few months.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hold on, let's look this up...\\\" Emily takes out her phone. \\\"The New York Times says that white flour can probably be used no matter its age. Apparently it can last for years, even. So it's probably fine.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's a relief...\\\"\"}],\"countVisitsMax\":1},\"cooking.more_filling\":{\"id\":\"cooking.more_filling\",\"content\":{\"content\":\"Probably best to double-check to see if there's anything you've missed.\",\"type\":\"paragraph\"}},\"main.fridge\":{\"id\":\"main.fridge\",\"title\":\"Fridge\",\"cardImage\":\"img/fridge.jpg\",\"isDeck\":true,\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"options\":[{\"id\":\"#fridge\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main\":{\"id\":\"main\",\"type\":\"scene\",\"title\":\"Main\",\"newPage\":true,\"isHand\":true,\"maxCards\":3,\"options\":[{\"id\":\"@main.pantry\"},{\"id\":\"@main.fridge\"},{\"id\":\"#pinnedCard\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"There are two major components to making dumplings - assembling the filling and assembling the skin. \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"The filling is already properly mixed, hopefully. \",\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"conditional\",\"content\":\"Now, the only thing left to do is boil the dumplings, and eat.\",\"predicate\":2}}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['filling'] || 0)===0) && ((Q['has_flour'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['filling_mixed'] || 0)===1) && ((Q['dumplings_made'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['dumplings_made'] || 0)===1);\"}}]}},\"root.start\":{\"id\":\"root.start\",\"onArrival\":[{\"$code\":\"Q['started'] = 1;\"}],\"newPage\":true,\"options\":[{\"id\":\"@root.step_back\",\"title\":\"Your name is Karen Zhao, or 赵秋怡, and you are...\"}],\"content\":[{\"type\":\"heading\",\"content\":\"过新年\"},{\"type\":\"paragraph\",\"content\":\"This Chinese New Year is different from all of the previous ones. Despite your family's various tribulations, Mom has always recalled you home for the occasion. This is the furthest you have been from \\\"home\\\", wherever that is.\"}]},\"ingredients.make_dough\":{\"id\":\"ingredients.make_dough\",\"options\":[{\"id\":\"@ingredients.em_stir\",\"title\":\"Let Emily handle this.\"},{\"id\":\"@ingredients.stir_yourself\",\"title\":\"You can stir it yourself.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for 4 cups of flour, 1 1/2 cups of water, and 1 tsp of oil. So, you mix all that into the bowl, and stir with a fork.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I can stir it,\\\" Emily says, watching over your shoulder.\"}]},\"cooking.no_more\":{\"id\":\"cooking.no_more\",\"onArrival\":[{\"$code\":\"Q['filling_mixed'] = 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There's nothing more to add, you hope.\"},{\"type\":\"paragraph\",\"content\":[\"\\\"馅儿做完了 \",{\"type\":\"emphasis-1\",\"content\":\"The filling is made\"},\",\\\" you say.\"]}]},\"root.step_back\":{\"id\":\"root.step_back\",\"options\":[{\"id\":\"@root.living_em\",\"title\":\"And you've been living with Emily for a while now.\"}],\"content\":{\"content\":\"Your name is Karen Zhao, or 赵秋怡, or Zhao Qiuyi, and you are... a person, you suppose, or something like that. You're in your 20s. You were born in Changchun, Jilin Province, PRC, and you moved to America with your parents at a young age. And...\",\"type\":\"paragraph\"}},\"ingredients.em_stir\":{\"id\":\"ingredients.em_stir\",\"onArrival\":[{\"$code\":\"Q['em_helped'] = (Q['em_helped'] || 0) + 1;\"}],\"content\":{\"content\":\"You hand Emily the fork and let her stir the dough.\",\"type\":\"paragraph\"}},\"cooking.dumplings\":{\"id\":\"cooking.dumplings\",\"title\":\"Make the dumplings.\",\"viewIf\":{\"$code\":\"return (((Q['filling_mixed'] || 0)===1) && ((Q['dumplings_made'] || 0)===0));\"},\"newPage\":true,\"cardImage\":\"img/board.jpg\",\"isPinnedCard\":true,\"onArrival\":[{\"$code\":\"Q['dumplings_made'] = 1;\"}],\"tags\":[\"pinnedCard\"],\"options\":[{\"id\":\"@cooking.make_skin\",\"title\":\"You make the skin, Emily assembles the dumplings.\"},{\"id\":\"@cooking.assemble\",\"title\":\"Emily makes the skin, you assemble the dumplings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Now that the filling is done, the next step is to actually assemble the dumplings. This is usually a task for two people. When you made dumplings with Mom, in the brief moment of reconcilliation last year before you left home again, one of you would make the skins, and the other would assemble the dumplings.\"},{\"type\":\"paragraph\",\"content\":\"Emily looks at you, and it seems like she has the same idea.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Okay, so...\\\"\"}]},\"root.living_em\":{\"id\":\"root.living_em\",\"options\":[{\"id\":\"@root.relationship\",\"title\":\"The two of you are in some sort of relationship.\"},{\"id\":\"@root.dating\",\"title\":[\"Wait, are you actually \",{\"type\":\"emphasis-1\",\"content\":\"dating\"},\"?\"]},{\"id\":\"@root.married\",\"title\":\"You're basically married already.\"}],\"content\":{\"content\":\"The two of you share a one-bedroom apartment in the city in which the two of you attend different postgraduate programs.\",\"type\":\"paragraph\"}},\"ingredients.stir_yourself\":{\"id\":\"ingredients.stir_yourself\",\"content\":{\"content\":\"\\\"It's already basically good,\\\" you reply.\",\"type\":\"paragraph\"}},\"cooking.make_skin\":{\"id\":\"cooking.make_skin\",\"onArrival\":[{\"$code\":\"Q['em_assembles'] = 1;\"}],\"options\":[{\"id\":\"@cooking.oh_why\",\"title\":\"\\\"Oh, why?\\\"\"},{\"id\":\"@cooking.make_dough\",\"title\":\"Concentrate on making the dough.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You'll roll out the dough, and Emily will assemble the dumplings.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Um, I haven't done this in a while,\\\" she says. \\\"Like, probably at least 10 years. So it might look bad. Sorry.\\\"\"}]},\"root.relationship\":{\"id\":\"root.relationship\",\"options\":[{\"id\":\"@root.dumplings\",\"title\":\"Does it really matter what you call it, though?\"}],\"content\":{\"content\":\"Yes, you're in a relationship. Emily Chen is your girlfriend, and you are hers, or something like that. You've been together since sometime last year, since the early phase of the pandemic, or something like that.\",\"type\":\"paragraph\"}},\"ingredients.wood-ears\":{\"id\":\"ingredients.wood-ears\",\"title\":\"木耳 (Wood ears)\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/wood_ears.jpg\",\"tags\":[\"pantry\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_wood_ears'] = (Q['has_wood_ears'] || 0) + 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for \\\"some\\\" 木耳, an unspecified quantity.\"},{\"type\":\"paragraph\",\"content\":\"Wood ears (木耳) are some kind of black dried fungi. You're supposed to soak them in water, and once they're soft again, chop them up and add them to the filling.\"}],\"countVisitsMax\":1},\"cooking.oh_why\":{\"id\":\"cooking.oh_why\",\"options\":[{\"id\":\"@cooking.heteronormative\",\"title\":\"\\\"That's heteronormative as fuck.\\\"\"},{\"id\":\"@cooking.dont_worry\",\"title\":\"\\\"Don't worry, I like cooking!\\\"\"},{\"id\":\"@cooking.make_dough\",\"title\":\"Concentrate on making the dough.\"},{\"id\":\"@cooking.make_dumplings\",\"title\":\"Concentrate on making the dumplings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh, why?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"After high school my parents said I should study instead of cooking.\\\" A pause. \\\"I used to like cooking. Maybe a bit too much. My dad said that when I grew up I should find a wife who liked cooking, unlike my mom. So now if I'm going to be a good wife I have to learn how to cook better. Sorry. That was a joke.\\\"\"}]},\"root.dating\":{\"id\":\"root.dating\",\"options\":[{\"id\":\"@root.dumplings\",\"title\":\"Does it really matter what you call it, though?\"}],\"content\":{\"content\":\"\\\"Dating\\\" would imply that the two of you engage on activities that can commonly be termed as \\\"dates\\\". Instead you just live together and eat together and sometimes share a bed and...\",\"type\":\"paragraph\"}},\"ingredients.vermicelli\":{\"id\":\"ingredients.vermicelli\",\"title\":\"粉丝 (Vermicelli)\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/vermicelli.jpg\",\"tags\":[\"pantry\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_vermicelli'] = (Q['has_vermicelli'] || 0) + 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for \\\"some\\\" 粉丝, an unspecified quantity. Most of the quantities are unspecified.\"},{\"type\":\"paragraph\",\"content\":\"粉丝 (vermicelli) are thin noodle-like sticks made from mung bean flour (and corn starch, according to the ingredients). You're supposed to soak them in warm water until they're soft, then chop them up finely and add to the filling.\"}],\"countVisitsMax\":1},\"cooking.heteronormative\":{\"id\":\"cooking.heteronormative\",\"options\":[{\"id\":\"@cooking.cook_more_together\",\"title\":\"\\\"Maybe we should cook more together.\\\"\"},{\"id\":\"@cooking.make_dough\",\"title\":\"Concentrate on making the dough.\"},{\"id\":\"@cooking.make_dumplings\",\"title\":\"Concentrate on making the dumplings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"That's heteronormative as fuck,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sorry. Yeah. You shouldn't be the only one cooking in this household, though...\\\"\"}]},\"root.married\":{\"id\":\"root.married\",\"onArrival\":[{\"$code\":\"Q['wife'] = 1;\"}],\"options\":[{\"id\":\"@root.dumplings\",\"title\":\"Does it really matter what you call it, though?\"}],\"content\":{\"content\":\"You live together and have an exclusive relationship and usually eat together and sometimes share a bed and sometimes share finances and one or both of you have made frequent references to being married despite your not-actually-married circumstances and...\",\"type\":\"paragraph\"}},\"ingredients.chives\":{\"id\":\"ingredients.chives\",\"title\":\"韭菜 (Chives)\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/chives.jpg\",\"tags\":[\"fridge\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_chives'] = (Q['has_chives'] || 0) + 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"options\":[{\"id\":\"@ingredients.em_chives\",\"title\":\"Let Emily handle some of the 韭菜.\"},{\"id\":\"@ingredients.chives_2\",\"title\":\"Chop them all yourself.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for about 1/2 lb chives. You do not weigh your chives, but it seems approximately correct. Mom does not weigh her ingredients either.\"},{\"type\":\"paragraph\",\"content\":\"Chives (韭菜) are the primary components of the filling. Chives are a grassy vegetable, a little garlic-y or something like that? Anyway, you're supposed to chop them up finely (you can never chop as finely as mom did).\"},{\"type\":\"paragraph\",\"content\":\"\\\"There are a lot of chives. Can I help cut some of them?\\\" Emily asks.\"}],\"countVisitsMax\":1},\"cooking.dont_worry\":{\"id\":\"cooking.dont_worry\",\"options\":[{\"id\":\"@cooking.cook_more_together\",\"title\":\"\\\"Maybe we should cook together more.\\\"\"},{\"id\":\"@cooking.make_dough\",\"title\":\"Concentrate on making the dough.\"},{\"id\":\"@cooking.make_dumplings\",\"title\":\"Concentrate on making the dumplings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Don't worry, I like cooking,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"You shouldn't have to be the only one cooking in this household, though!\\\"\"}]},\"root.dumplings\":{\"id\":\"root.dumplings\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Well, whatever it is, the two of you have decided to make dumplings today. Mom gave you one of her recipes, and in the past week, you and Emily braved the long journey to an Asian market to acquire all the requisite ingredients.\"},{\"type\":\"paragraph\",\"content\":\"As they say, today is the day.\"}]},\"ingredients.em_chives\":{\"id\":\"ingredients.em_chives\",\"onArrival\":[{\"$code\":\"Q['em_helped'] = (Q['em_helped'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You give Emily the knife and let her handle the vegetables. She cuts them about as well as you do.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sorry, this is like, really thick,\\\" she says.\"}]},\"cooking.cook_more_together\":{\"id\":\"cooking.cook_more_together\",\"options\":[{\"id\":\"@cooking.make_dough\"},{\"id\":\"@cooking.make_dumplings\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Maybe we should cook together more,\\\" you suggest.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, we should do something like this more often.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Unfortunately, your schedules and habits are such that you usually purchase ready-made food. Maybe that will change. It's difficult, though. Time and energy are against you.\"}]},\"root.credits\":{\"id\":\"root.credits\",\"options\":[{\"id\":\"@root.start_menu\",\"title\":\"Back to menu\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Text and photographs by Autumn Chen. Very loosely adapted from a recipe my mother taught me. The recipe for the filling was actually for 韭菜盒子 (https://en.wikipedia.org/wiki/Jiucai_hezi), but I think it works for dumplings as well.\"},{\"type\":\"paragraph\",\"content\":\"Made with DendryNexus.\"}]},\"root\":{\"id\":\"root\",\"type\":\"scene\",\"title\":\"Root Scene\",\"newPage\":true,\"goTo\":[{\"id\":\"main\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===1);\"}},{\"id\":\"root.start_menu\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===0);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"ingredients.chives_2\":{\"id\":\"ingredients.chives_2\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's okay, I can do it myself,\\\" you say, and finish chopping the rest of the vegetables.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, okay...\\\"\"}]},\"cooking.make_dough\":{\"id\":\"cooking.make_dough\",\"viewIf\":{\"$code\":\"return ((Q['em_assembles'] || 0)===1);\"},\"title\":\"Concentrate on making the dough.\",\"options\":[{\"id\":\"@cooking.in_the_end\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"First, you kneed the dough, and stretch it out into a long cylinder, maybe a couple of inches in diameter. Next, with a knife, you cut off little pieces of the dough cylinder, maybe half an inch in thickness. Then, you press the cylinder with the palm of your hand, and then roll the piece of dough. You alternate pressing on the piece of dough back and forth with the rolling pin in your right hand, and then rotating it with the left hand. This way, you roll the piece of dough into an approximate circle.\"},{\"type\":\"paragraph\",\"content\":\"Meanwhile, Emily assembles the dumplings. They're rather inexpertly assembled, laying flat on the side instead of sitting upright with a curve in the middle like Mom always made, but it's going to be fine. In the mouth, it will all taste the same.\"}]},\"ingredients.eggs\":{\"id\":\"ingredients.eggs\",\"title\":\"Eggs\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/eggs_1.jpg\",\"tags\":[\"fridge\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_eggs'] = (Q['has_eggs'] || 0) + 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"options\":[{\"id\":\"@ingredients.ask_em_scramble\",\"title\":\"Ask Emily if she can make the scrambled eggs.\"},{\"id\":\"@ingredients.scramble_yourself\",\"title\":\"Cook the eggs yourself.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for 4 eggs, cooked.\"},{\"type\":\"paragraph\",\"content\":\"Eggs have probably the most involved preparation step of any of the ingredients here. You have to cook the eggs first, scramble them, before adding them into the filling mix. That involves cracking the eggs, beating them, turning on the stovetop, adding some oil to the pan, adding the eggs into the pan, stirring them until they solidify, and then, finally, you will have some scrambled eggs.\"}],\"countVisitsMax\":1},\"cooking.assemble\":{\"id\":\"cooking.assemble\",\"onArrival\":[{\"$code\":\"Q['you_assemble'] = 1;\"}],\"options\":[{\"id\":\"@cooking.show_you\",\"title\":\"\\\"I'll show you.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Okay, I literally have no idea how to make the dough,\\\" Emily says. \\\"The skin, I mean.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"You just, like, first roll the dough into a long cylinder, then you cut off small chunks, and then roll those small chunks of the cylinder into a flat circle with a rolling pin.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She stares at you, seemingly dumbfounded.\"}]},\"ingredients.ask_em_scramble\":{\"id\":\"ingredients.ask_em_scramble\",\"onArrival\":[{\"$code\":\"Q['em_helped'] = (Q['em_helped'] || 0) + 1;\\nQ['em_eggs'] = 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, Em, can you make the 炒鸡蛋? The, um, scrambled eggs?\\\" You catch yourself speaking Chinese more when cooking. Something about it feels natural. Emily speaks much less Chinese; she was born in America.\"},{\"type\":\"paragraph\",\"content\":\"Emily smiles. \\\"Sure, it's probably the one thing I can make...\\\"\"},{\"type\":\"paragraph\",\"content\":\"She seems to be rather good at this. While she cooks the eggs, you can work on the rest of the recipe.\"}]},\"cooking.show_you\":{\"id\":\"cooking.show_you\",\"options\":[{\"id\":\"@cooking.oh_why\",\"title\":\"\\\"Oh, why?\\\"\"},{\"id\":\"@cooking.make_dumplings\",\"title\":\"Concentrate on making the dumplings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I'll show you,\\\" you say, and you demonstrate how you would roll out the dough. First, you kneed the dough, and stretch it out into a long cylinder, maybe a couple of inches in diameter. Next, with a knife, you cut off little pieces of the dough cylinder, maybe half an inch in thickness. Then, you press the cylinder with the palm of your hand, and then roll the piece of dough. You alternate pressing on the piece of dough back and forth with the rolling pin in your right hand, and then rotating it with the left hand. This way, you roll the piece of dough into an approximate circle.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I think I can do it,\\\" Emily says after watching you. \\\"Sorry, I'm really bad at this. I haven't helped make dumplings in, like, probably at least 10 years.\\\"\"}]},\"ingredients.scramble_yourself\":{\"id\":\"ingredients.scramble_yourself\",\"options\":[{\"id\":\"@ingredients.its_okay\",\"title\":\"\\\"It's okay! I wanted to do this...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"For some reason, you feel as if you have to do all of this yourself. So you crack four eggs into a bowl, stir them with chopsticks until they are a uniform yellow, and then proceed to turn on the stovetop, add oil to the pan, and cook.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I could have helped,\\\" says Emily. \\\"Sorry...\\\"\"}]},\"cooking.make_dumplings\":{\"id\":\"cooking.make_dumplings\",\"viewIf\":{\"$code\":\"return ((Q['you_assemble'] || 0)===1);\"},\"title\":\"Concentrate on making the dumplings.\",\"options\":[{\"id\":\"@cooking.in_the_end\"}],\"content\":{\"content\":\"While Emily makes the skins (slower than you would make), you assemble the dumplings. With the skin in your left hand, you take a glob of filling with chopsticks and plop them down in the middle. Then, you fold the centers together along the diameter of the skin, and then, with the crook between your thumb and index finger, you fold in the skin on either side of the center. The sign of an expert is making a dumpling that can stand up, and you do so.\",\"type\":\"paragraph\"}},\"ingredients.its_okay\":{\"id\":\"ingredients.its_okay\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's okay! I wanted to do this...\\\"\"},{\"type\":\"paragraph\",\"content\":\"Emily catches your gaze for a moment. \\\"Uh, okay then.\\\"\"}]},\"cooking.in_the_end\":{\"id\":\"cooking.in_the_end\",\"title\":\"Enough dumplings are assembled to make one pot.\",\"content\":{\"content\":\"After enough dumplings are assembled to make more than one pot (around 20 or so), the two of you decide to take a break.\",\"type\":\"paragraph\"}},\"ingredients.spices\":{\"id\":\"ingredients.spices\",\"title\":\"Spices and oils\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/spices.jpg\",\"tags\":[\"pantry\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['has_spices'] = (Q['has_spices'] || 0) + 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"viewIf\":{\"$code\":\"return (((Q['filling'] || 0) > 1) && ((Q['filling_mixed'] || 0)===0));\"},\"content\":{\"content\":\"The recipe calls for olive oil (extremely not traditionally Chinese, but whatever), sesame oil, a little soy sauce (not too much), salt, and white pepper powder. The quantities are not given for any of these ingredents, so you add enough to the pot until it looks approximately right.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"cooking.boil\":{\"id\":\"cooking.boil\",\"title\":\"Boil the dumplings.\",\"viewIf\":{\"$code\":\"return ((Q['dumplings_made'] || 0)===1);\"},\"newPage\":true,\"cardImage\":\"img/dumplings.jpg\",\"isPinnedCard\":true,\"onArrival\":[{\"$code\":\"Q['dumplings_boiled'] = 1;\"}],\"tags\":[\"pinnedCard\"],\"options\":[{\"id\":\"@cooking.third_time\",\"title\":\"After the water boils for the third time, it is done.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Finally, you can boil the dumplings. You fill a pot with water, and then boil it on the stovetop. After it is boiling, you add in the dumplings. After the water boils again, you add in an extra cup of cold water.\"},{\"type\":\"paragraph\",\"content\":\"It is extremely crucial that you add in the extra cup of water, for reasons unknown.\"}]},\"ingredients.shrimp\":{\"id\":\"ingredients.shrimp\",\"title\":\"Shrimp\",\"isCard\":true,\"newPage\":true,\"cardImage\":\"img/shrimp.jpg\",\"tags\":[\"fridge\"],\"maxVisits\":1,\"viewIf\":{\"$code\":\"return ((Q['filling_mixed'] || 0)===0);\"},\"options\":[{\"id\":\"@ingredients.vegetarian\",\"title\":\"\\\"Oh, um, you can't eat this, right, Em?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The recipe calls for approximately 1/4 lb of chopped shrimp.\"},{\"type\":\"paragraph\",\"content\":\"There is a package of frozen shrimp in the fridge, which is a few months expired. But, frozen products never go bad, right?\"}],\"countVisitsMax\":1},\"cooking.third_time\":{\"id\":\"cooking.third_time\",\"onArrival\":[{\"$code\":\"Q['dumplings_made'] = 12;\"}],\"goTo\":[{\"id\":\"cooking.em_worried\",\"predicate\":{\"$code\":\"return ((Q['em_helped'] || 0) <= 0);\"}}],\"options\":[{\"id\":\"@cooking.try_them\",\"title\":\"Try them!!!\"}],\"content\":{\"content\":\"After the water boils for the third time, and the dumplings are floating in the top of the water, that is when they should be fully cooked.\",\"type\":\"paragraph\"}},\"ingredients.vegetarian\":{\"id\":\"ingredients.vegetarian\",\"options\":[{\"id\":\"@ingredients.add_shrimp\",\"title\":\"Add the shrimp\"},{\"id\":\"@ingredients.no_shrimp\",\"title\":\"Don't add the shrimp.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um, you can't eat this, right, Em?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She shrugs. \\\"I mean, I'm not that strict... I don't know, I haven't looked up the carbon footprint of aquaculture recently. Do you think it's necessary?\\\"\"}]},\"cooking.em_worried\":{\"id\":\"cooking.em_worried\",\"options\":[{\"id\":\"@cooking.its_okay_dumplings\"},{\"id\":\"@cooking.its_okay_dough\"},{\"id\":\"@cooking.dishes\"}],\"content\":{\"content\":\"\\\"Sorry, I feel like I didn't help much,\\\" Emily says.\",\"type\":\"paragraph\"}},\"ingredients.add_shrimp\":{\"id\":\"ingredients.add_shrimp\",\"onArrival\":[{\"$code\":\"Q['has_shrimp'] = 1;\\nQ['filling'] = (Q['filling'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You chop up the shrimp and add it into the filling bowl. \\\"I suppose the recipe says we should... You know, my mom said that this is a 素的 recipe. Like, somehow shrimp isn't an animal.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's fine,\\\" Emily says. \\\"I can eat shrimp, if it's something you like.\\\"\"}]},\"cooking.its_okay_dumplings\":{\"id\":\"cooking.its_okay_dumplings\",\"viewIf\":{\"$code\":\"return (((Q['em_assembles'] || 0)) !== 0);\"},\"title\":\"\\\"It's okay! You helped assemble the dumplings!\\\"\",\"options\":[{\"id\":\"@cooking.try_dumplings\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's okay! You helped assemble the dumplings!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"But like, you did everything else...\\\"\"}]},\"ingredients.no_shrimp\":{\"id\":\"ingredients.no_shrimp\",\"content\":{\"content\":\"\\\"Let's not add it,\\\" you say. Emily nods.\",\"type\":\"paragraph\"}},\"ingredients\":{\"id\":\"ingredients\",\"type\":\"scene\",\"title\":\"Ingredients\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"cooking.its_okay_dough\":{\"id\":\"cooking.its_okay_dough\",\"viewIf\":{\"$code\":\"return (((Q['you_assemble'] || 0)) !== 0);\"},\"title\":\"\\\"It's okay! You helped make the dough!\\\"\",\"options\":[{\"id\":\"@cooking.try_dumplings\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"It's okay! You helped make the dough!\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"But like, you did everything else...\\\"\"}]},\"cooking.dishes\":{\"id\":\"cooking.dishes\",\"title\":\"\\\"You can do the dishes afterwards.\\\"\",\"options\":[{\"id\":\"@cooking.try_dumplings\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"You can do the dishes afterwards.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, of course, but also...\\\"\"}]},\"cooking.try_dumplings\":{\"id\":\"cooking.try_dumplings\",\"title\":\"\\\"Let's just try the dumplings first, okay?\\\"\",\"goTo\":[{\"id\":\"cooking.try_them\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Let's just try the dumplings, okay?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Okay...\\\" She nods. \\\"But next time, I want to do more to help.\\\"\"}]},\"cooking.try_them\":{\"id\":\"cooking.try_them\",\"title\":\"Try them!!!\",\"options\":[{\"id\":\"@cooking.dumplings_good\"},{\"id\":\"@cooking.dumplings_bad\"}],\"content\":{\"content\":\"You plate some of the dumplings. You and Emily each get chopsticks and take a bite.\",\"type\":\"paragraph\"}},\"cooking.dumplings_good\":{\"id\":\"cooking.dumplings_good\",\"title\":\"They're pretty good!\",\"onArrival\":[{\"$code\":\"Q['dumpling_quality'] = 1;\"}],\"viewIf\":{\"$code\":\"return (((Q['has_spices'] || 0)===1) && ((Q['has_eggs'] || 0)===1));\"},\"options\":[{\"id\":\"@cooking.endgame\",\"title\":\"Next time...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The dumplings are actually pretty good, perhaps surprisingly! The flavor profile is balanced despite the slapdash ingredient mixing.\"},{\"type\":\"paragraph\",\"content\":\"You and Emily look at each other, coming to the same conclusion. She smiles, and you smile in turn.\"},{\"type\":\"paragraph\",\"content\":\"\\\"We should, like...\\\" Emily begins-\"},{\"type\":\"paragraph\",\"content\":\"\\\"Increase our frequency of home-cooked Chinese meals?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, that.\\\"\"}]},\"cooking.dumplings_bad\":{\"id\":\"cooking.dumplings_bad\",\"title\":\"They... need some improvement.\",\"onArrival\":[{\"$code\":\"Q['dumpling_quality'] = -1;\"}],\"viewIf\":{\"$code\":\"return ((((Q['has_spices'] || 0)===0) || ((Q['has_eggs'] || 0)===0)) || ((Q['has_chives'] || 0)===0));\"},\"options\":[{\"id\":\"@cooking.no_spices\"},{\"id\":\"@cooking.no_eggs\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"You and Emily look at each other, coming to the same conclusion. It isn't \",{\"type\":\"emphasis-1\",\"content\":\"bad\"},\"-tasting, but it's missing something. There is a balance or texture that is missing.\"]}},\"cooking.no_spices\":{\"id\":\"cooking.no_spices\",\"viewIf\":{\"$code\":\"return ((Q['has_spices'] || 0)===0);\"},\"title\":\"\\\"Oh no, I forgot to add the spices!\\\"\",\"options\":[{\"id\":\"@cooking.endgame\",\"title\":\"There's always next time...\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh no, I forgot to add the spices! I didn't even add the soy sauce or salt.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's why it tastes so bland... I should have noticed. I should have said something. Sorry.\\\"\"}]},\"cooking.no_eggs\":{\"id\":\"cooking.no_eggs\",\"viewIf\":{\"$code\":\"return ((Q['has_eggs'] || 0)===0);\"},\"title\":\"\\\"Oh no, I forgot to add the eggs!\\\"\",\"options\":[{\"id\":\"@cooking.endgame\",\"title\":\"There's always next time...\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh no, I forgot to add the eggs!\\\"\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"\\\"At least there's shrimp, for the protein?\\\" \",\"predicate\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"\\\"Yeah... sorry about that.\\\" \",\"predicate\":1},\"\"]},{\"type\":\"paragraph\",\"content\":\"\\\"It's fine. I didn't know either. I should have said something. Sorry.\\\"\"}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_shrimp'] || 0)===1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['has_shrimp'] || 0)===1);\"}}]}},\"cooking.endgame\":{\"id\":\"cooking.endgame\",\"gameOver\":true,\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"cooking\":{\"id\":\"cooking\",\"type\":\"scene\",\"title\":\"Cooking\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}}},\"qualities\":{\"hunger\":{\"id\":\"hunger\",\"type\":\"quality\",\"name\":\"Hunger\",\"initial\":0,\"min\":0,\"max\":20,\"content\":{\"content\":\"An indication of how hungry you are.\",\"type\":\"paragraph\"}},\"anxiety\":{\"id\":\"anxiety\",\"type\":\"quality\",\"name\":\"Anxiety\",\"initial\":0,\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"magic\":{\"id\":\"magic\",\"type\":\"quality\",\"name\":\"Magic\",\"initial\":0,\"content\":{\"content\":\"\",\"type\":\"paragraph\"}}},\"qdisplays\":{\"qhunger\":{\"id\":\"qhunger\",\"type\":\"qdisplay\",\"content\":[{\"min\":0,\"max\":2,\"output\":\": Not hungry\"},{\"min\":3,\"max\":10,\"output\":\": A little hungry\"}]},\"qmagic\":{\"id\":\"qmagic\",\"type\":\"qdisplay\",\"content\":[{\"min\":0,\"max\":1,\"output\":\": none\"},{\"min\":2,\"max\":4,\"output\":\": weak\"},{\"min\":5,\"output\":\": decent\"}]}},\"tagLookup\":{\"pinnedCard\":{\"cooking.filling\":true,\"cooking.dumplings\":true,\"cooking.boil\":true},\"pantry\":{\"ingredients.flour\":true,\"ingredients.wood-ears\":true,\"ingredients.vermicelli\":true,\"ingredients.spices\":true},\"fridge\":{\"ingredients.chives\":true,\"ingredients.eggs\":true,\"ingredients.shrimp\":true}}}"};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  // To avoid the need to include any utility libraries when this is
  // used in a browser, define some helper functions we'd normally
  // rely on libraries for.

  var assert = function(mustBeTrue) {
    /* istanbul ignore if */
    if (!mustBeTrue) {
      throw new Error('Assertion failed.');
    }
  };

  var each = function(array, fn) {
    for (var i = 0; i < array.length; ++i) {
      fn(array[i]);
    }
  };

  var objEach = function(obj, fn) {
    for (var key in obj) {
      fn(key, obj[key]);
    }
  };

  var merge = function() {
    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  // Credit: Taken from Lodash (MIT License). See CREDITS.
  var isObject = function(value) {
    var type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  };

  var makeFunctionFromSource = function(source) {
    source = source.trim();
    /*jshint -W054 */
    var fn = new Function('state', 'Q', source);
    /*jshint +W054 */
    fn.source = source;
    return fn;
  };

  var runActions = function(actions, context, state) {
    if (actions === undefined) {
      return;
    }
    each(actions, function(fn) {
      try {
        fn.call(context, state, state.qualities);
      } catch (err) {
        // Ignore errors. TODO: Log them somehow?
        console.log('Error:', err);
      }
    });
  };

  var runPredicate = function(predicate, default_, context, state) {
    var result = default_;
    if (predicate === undefined) {
      return result;
    }
    try {
      result = !!predicate.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error:', err);
    }
    return result;
  };

  var runExpression = function(expression, default_, context, state) {
    var result = default_;
    if (expression === undefined) {
      return result;
    }
    try {
      result = expression.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
      console.log('Error in expression', expression, ':', err);
    }
    return result;
  };

  var convertJSONToGame = function(json, callback) {
    var reviver = function(key, value) {
      if (isObject(value) && value.$code !== undefined) {
        return makeFunctionFromSource(value.$code);
      } else {
        return value;
      }
    };

    try {
      var game = JSON.parse(json, reviver);
      return callback(null, game);
    } catch (err) {
      return callback(err);
    }
  };

  var simpleContent = function(text) {
    return [{type:'paragraph', content:text}];
  };

  var getCardinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0 && value <= 12) {
      // Integer, so use word.
      return ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][value];
    } else {
      return value.toString();
    }
  };

  var getOrdinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0) {
      if (value <= 12) {
        return ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
                'twelfth'][value];
      } else {
        value = value.toString();
        if (/1[0-9]$/.test(value)) {
          return value + 'th';
        } else {
          var last = value.substr(value.length - 1, 1);
          switch (last) {
            case '1': return value + 'st';
            case '2': return value + 'nd';
            case '3': return value + 'rd';
            default: return value + 'th';
          }
        }
      }
    } else {
      return value.toString();
    }
  };

  var getFudgeDisplay = function(value) {
    if (Math.floor(value) === value) {
      if (value > 3) {
        return 'superb+' + (value - 3);
      } else if (value < -3) {
        return 'terrible' + (value + 3);
      } else {
        switch (value) {
          case  3: return 'superb';
          case  2: return 'great';
          case  1: return 'good';
          case  0: return 'fair';
          case -1: return 'mediocre';
          case -2: return 'poor';
          case -3: return 'terrible';
        }
      }
    } else {
      return value.toString();
    }
  };

  var getUserQDisplay = function(value, qdisplay) {
    for (var i = 0; i < qdisplay.content.length; ++i) {
      var case_ = qdisplay.content[i];
      var min = case_.min;
      var max = case_.max;
      if ((min === undefined || min <= value) &&
          (max === undefined || max >= value)) {
        if (case_.output !== undefined) {
          return case_.output;
        } else {
          return value.toString();
        }
      }
    }
    return value.toString();
  };

  // broad difficulty from https://fallenlondon.wiki/wiki/Broad_difficulty
  
  var calculateBroadDifficulty = function(quality, difficulty, scaler, random) {
    if (!scaler) {
      scaler = 0.6;
    }
    if (scaler > 1) {
      scaler = scaler/100;
    }
    var success_prob = scaler*(quality/difficulty);
    if (success_prob > 1) {
      success_prob = 1;
    }
    return success_prob;
 };

  // narrow difficulty from https://fallenlondon.wiki/wiki/Narrow_difficulty
  var calculateNarrowDifficulty = function(quality, difficulty, increment) {
    if (!increment) {
      increment = 0.1;
    }
    if (increment > 1) {
      increment = increment/100;
    }
    var success_prob = (quality - difficulty)*increment + 0.5;
    if (success_prob > 1) {
      success_prob = 1;
    } else if (success_prob < increment) {
      success_prob = increment;
    }
    return success_prob;
  };

  // this function actually does the roll for success.
  var rollDifficulty = function(success_prob, random) {
    var rn;
    if (random) {
      rn = random.random();

    } else {
      rn = Math.random();
    }
    if (rn < success_prob) {
      return true;
    }
    return false;   
  };


  // use the storynexus adjectives
  var displayDifficulty = function(success_prob) {
    if (success_prob <= 0.1) {
      return "almost impossible";
    } else if (success_prob <= 0.3) {
      return "high-risk";
    } else if (success_prob <= 0.4) {
      return "tough";
    } else if (success_prob <= 0.5) {
      return "very chancy";
    } else if (success_prob <= 0.6) {
      return "chancy";
    } else if (success_prob <= 0.7) {
      return "modest";
    } else if (success_prob <= 0.8) {
      return "very modest";
    } else if (success_prob <= 0.9) {
      return "low risk";
    } else {
      return "straightforward";
    }
  };


  // ------------------------------------------------------------------------

  // Objects with this interface are passed to a game state to have it
  // display content.
  var UserInterface = function() {};
  UserInterface.prototype.beginGame = function() {};
  UserInterface.prototype.displayContent = function(paragraphs) {};
  // these are the dendrynexus display functions
  // displays the decks
  UserInterface.prototype.displayDecks = function(decks) {};
  // displays cards in hand
  UserInterface.prototype.displayHand = function(hand) {};
  // displays pinned cards (these are basically an alternate way of displaying choices)
  UserInterface.prototype.displayPinnedCards = function(cards) {};

  UserInterface.prototype.displayChoices = function(choices) {};
  UserInterface.prototype.displayGameOver = function() {
    this.displayContent(simpleContent('Game Over'));
  };
  UserInterface.prototype.removeChoices = function() {};
  // Called when the player makes a choice and new content is about to be
  // added (i.e. isn't called between output when the next scene is arrived
  // at via go-to).
  UserInterface.prototype.beginOutput = function() {};
  UserInterface.prototype.endOutput = function() {};
  UserInterface.prototype.newPage = function() {};
  UserInterface.prototype.setStyle = function(style) {};
  UserInterface.prototype.signal = function(data) {};
  UserInterface.prototype.setBg = function(img) {};
  UserInterface.prototype.setSprites = function(data) {};
  UserInterface.prototype.setSpriteStyle = function(loc, style) {};
  UserInterface.prototype.audio = function(audio) {};
  // Not part of the UI, but allows us to simply subclass.
  UserInterface.makeParentOf = function(OtherConstructor) {
    OtherConstructor.prototype = new UserInterface();
    OtherConstructor.constructor = OtherConstructor;
  };

  // ------------------------------------------------------------------------

  // An engine is given a user interface, the game and the current
  // game state (can be omitted). It is responsible for the logic of
  // the game.
  var DendryEngine = function(ui, game) {
    this.ui = ui;
    this.game = game;
  };

  DendryEngine.prototype.displayGameOver = function() {
    this.ui.displayGameOver();
    return this;
  };

  DendryEngine.prototype.displayChoices = function() {
    // TODO: dendrynexus - if the current scene is a hand, display the decks, hand, and pinned cards.
    var choices = this.getCurrentChoices();
    assert(choices);
    var scene = this.getCurrentScene();
    if (scene.isHand) {
      // separate choices into decks and pinned cards
      var decks = [];
      var pinnedCards = [];
      for (var c of choices) {
        var choiceScene = this.game.scenes[c.id];
        if (choiceScene.isDeck) {
          c.isDeck = true;
          c.image = choiceScene.cardImage;
          decks.push(c);
        } else if (choiceScene.isPinnedCard) {
          c.isDeck = false;
          c.image = choiceScene.cardImage;
          pinnedCards.push(c);
        }
      }
      if (!this.state.currentHands[this.state.sceneId]) {
        this.state.currentHands[this.state.sceneId] = [];
      }
      var currentHand = this.state.currentHands[this.state.sceneId];
      // TODO: check the viewIf/chooseIf conditions for all cards in the current hand, and filter them if they no longer work...
      var handIds = {};
      for (var card of currentHand) {
        handIds[card.id] = card;
      }
      handIds = this.__filterViewable(handIds);
      for (var i = 0; i < currentHand.length; i++) {
        while (currentHand[i] && !handIds[currentHand[i].id]) {
          currentHand.splice(i, 1);
        }
      }
      this.ui.displayDecks(decks);
      this.ui.displayHand(currentHand, scene.maxCards);
      this.ui.displayPinnedCards(pinnedCards);
    } else {
      this.ui.displayChoices(choices);
    }
    return this;
  };

  DendryEngine.prototype.displaySceneContent = function(restorePage) {
    var scene = this.getCurrentScene();
    assert(scene);

    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      this.ui.signal({signal:sceneSignal,
                      event:'scene-display',
                      id:this.state.sceneId});
    }
    if (restorePage) {
      this.ui.newPage();
      this.ui.displayContent(this.state.tempCurrentContent);
      this.state.currentContent = this.state.tempCurrentContent.slice();
    } else if (scene.newPage) {
      this.ui.newPage();
      this.state.currentContent = [];
    }
    this.ui.setStyle(scene.style);
    this.ui.removeChoices();

    if (scene.content !== undefined && !restorePage) {
      var displayContent = this._makeDisplayContent(scene.content, true);
      this.state.currentContent = this.state.currentContent.concat(displayContent);
      this.ui.displayContent(displayContent);
    }
    this._runActions(scene.onDisplay);

    return this;
  };

  DendryEngine.prototype.choose = function(choiceIndex) {
    var choices = this.choiceCache;

    // Check for valid choice.
    assert(choices);
    if (choices.length <= choiceIndex) {
      throw new Error('No choice at index ' + choiceIndex + ', only ' +
                      choices.length + ' choices are available.');
    }

    // Commit the choice.
    var choice = choices[choiceIndex];
    if (!choice.canChoose) {
      throw new Error('Attempted to choose index ' + choiceIndex + ', but ' +
                      'that choice is unavailable.');
    }

    var id = choice.id;

    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.chooseSceneId = function(sceneId) {
    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  // TODO: dendrynexus - draw card
  DendryEngine.prototype.drawCard = function(deckId) {
    var currentSceneId = this.state.sceneId;
    var scene = this.getCurrentScene();
    assert(scene);
    
    var currentHand = this.state.currentHands[currentSceneId];
    // return a message saying that there are too many cards
    if (scene.maxCards <= currentHand.length) {
      return {id: null, title: 'no_space_in_hand'};
    }
    // get an available card from deckId
    // card is {id: id, title: title}
    var card = this._drawFromDeck(deckId);
    // distinguish between the "no space left in hand" and "no card in deck" situations?
    if (!card) {
      return {id: null, title: 'no_card_in_deck'};
    }
    var image = this.game.scenes[card.id].cardImage;
    card.image = image;
    this.state.currentHands[currentSceneId].push(card);

    // display the hand
    this.ui.displayHand(this.state.currentHands[currentSceneId], scene.maxCards);
    return card;
  };


  // dendrynexus - play a card (remove it from the current hand)
  // should this be the code for pinned cards as well?
  DendryEngine.prototype.playCard = function(cardId) {
    var currentSceneId = this.state.sceneId;
    var currentHand = this.state.currentHands[currentSceneId];
    // remove card from hand
    for (var i = 0; i < currentHand.length; i++) {
      if (currentHand[i].id == cardId) {
        currentHand.splice(i, 1);
        break;
      }
    }
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.playPinnedCard = function(cardId) {
    delete this.choiceCache;
    this.goToScene(cardId);
  };

  DendryEngine.prototype.goToScene = function(id) {
    this.state.sceneIdsSinceGoTo = [];
    this.ui.beginOutput();
    this.__changeScene(id);
    this.ui.endOutput();
  };

  DendryEngine.prototype.beginGame = function(rndSeeds) {
    this.random = rndSeeds ? Random.fromSeeds(rndSeeds) : Random.fromUnique();
    this.state = {
      sceneId: null,
      sceneIdsSinceGoTo: [],
      rootSceneId: this.game.rootScene || this.game.firstScene || 'root',
      gameOver: false,
      visits: {},
      qualities: {},
      currentRandomState: null,
      currentContent: [],
      // tempCurrentContent is used for when the
      // player visits the stats or settings pages in order to remember
      // where the previous page was?
      tempCurrentContent: [],
      // prevSpecialSceneId is only set when visiting scene tagged with
      // isSpecial = true, and is the scene before the special scene.
      prevSpecialSceneId: null,
      prevSceneId: null,
      // every time a top-level scene changes,
      // this record the last-visited qualified id within that scene.
      prevTopSceneId: null,
      // jumpScene is defined within a scene file, indicating the scene that
      // @jumpScene will go to. Basically it's used to make subroutines.
      jumpSceneId: null,
      // achievements is a dict of all the current achievements.
      // persist achievements in the browser through localstorage?
      achievements: {},
      // current background image
      bg: null,
      // sceneStack is used for goSub
      sceneStack: [],
      // true if just popped out of a returnScene
      justReturned: false,
      // just returned from a goSubStart
      justReturnedStart: false,
      // just returned from a goSubEnd
      justReturnedEnd: false,
      // sprites is a mapping from location to file
      sprites: {},
      // dendrynexus stuff
      // mapping from sceneId to list of sceneIds - indicating the current hand in each of those scenes.
      currentHands: {},
    };

    this._setUpQualities();
    this._loadAchievements();

    this.ui.beginGame();

    var id = this.game.firstScene || this.state.rootSceneId;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype._loadAchievements = function() {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_achievements']) {
            this.state.achievements = JSON.parse(
                localStorage[this.game.title + '_achievements']);
            // add a special quality named 'achievement_'
            for (var achievement in this.state.achievements) {
                this.state.qualities['achievement_' + achievement] = 1;
            }
        }
    }
  };

  DendryEngine.prototype.gameOver = function() {
    this.state.gameOver = true;
    this.displayGameOver();
    return this;
  };

  DendryEngine.prototype.isGameOver = function() {
    return this.state.gameOver;
  };

  DendryEngine.prototype.getCurrentScene = function() {
    var scene = this.game.scenes[this.state.sceneId];
    assert(scene !== undefined);
    return scene;
  };

  // Returns the choices for the current scene. Choices are objects
  // with an id and a title property, not to be confused with the
  // option objects in a scene (though options are used to generate
  // choices). Choices are compiled from the options belonging to the
  // current scene.
  DendryEngine.prototype.getCurrentChoices = function() {
    return this.choiceCache;
  };

  // Sets the current state of the engine from an exportable state.
  DendryEngine.prototype.setState = function(state) {
    // Set the state.
    this.state = state;
    this._setUpQualities();
    this.random = Random.fromState(this.state.currentRandomState);
    this._loadAchievements();

    // Display the current state.
    if (this.isGameOver()) {
      this.displayGameOver();
    } else {
      var scene = this.getCurrentScene();
      this.choiceCache = this._compileChoices(scene);
      this.ui.newPage();
      this.ui.removeChoices();
      this.ui.displayContent(this.state.currentContent);
      this.displayChoices();
      this.ui.setSprites(this.state.sprites);
      this.ui.setBg(this.state.bg);
    }
    return this;
  };

  // Returns a data structure for exporting without any accessors or
  // complex classes.
  DendryEngine.prototype.getExportableState = function() {
    // Because we only have complex state in the qualities (they have
    // accessors), and because we save with JSON (which calls
    // accessors correctly), we don't have to worry about giving the
    // actual state. Note that, if you want to keep this object, however,
    // you want to clone it somehow (turning it to and from json,
    // for example), otherwise it will change as the engine updates.
    return this.state;
  };

  // ------------------------------------------------------------------------

  DendryEngine.prototype._getQDisplay = function(value, qDisplayId) {
    switch (qDisplayId) {
    case 'cardinal': case 'number':
      return getCardinalNumber(value);
    case 'ordinal':
      return getOrdinalNumber(value);
    case 'fudge':
      return getFudgeDisplay(value);
    default:
      var qdisplay = this.game.qdisplays[qDisplayId];
      assert(qdisplay !== undefined);
      return getUserQDisplay(value, qdisplay);
    }
  };

  DendryEngine.prototype._evaluateStateDependencies = function(defs) {
    var result = [];

    for (var i = 0; i < defs.length; ++i) {
      var value;
      var def = defs[i];
      var fn = def.fn;
      switch (def.type) {
      case 'insert':
        value = this._runExpression(fn);
        if (def.qdisplay) {
          value = this._getQDisplay(value, def.qdisplay);
        } else {
          value = value.toString();
        }
        break;

      default:
        assert(def.type === 'predicate');
        value = this._runPredicate(fn);
        break;
      }

      // Recurse the resolution into the resulting value, if needed.
      if (value.stateDependencies !== undefined) {
        // We have to resolve the nested state dependencies.
        value = this._makeDisplayContent(value, false);
      }
      result.push(value);
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvalsInArray = function(array, evals) {
    if (!Array.isArray(array)) {
      array = [array];
    }
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result = result.concat(this._mergeStateEvals(array[i], evals));
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvals = function(content, evals) {
    if (content.type === undefined) {
      return [content];
    }

    var result;
    switch (content.type) {
    case 'conditional':
      if (evals[content.predicate]) {
        result = this._mergeStateEvalsInArray(content.content, evals);
      } else {
        result = [];
      }
      break;
    case 'insert':
      result = evals[content.insert];
      break;
    default:
      var newE = {type:content.type};
      newE.content = this._mergeStateEvalsInArray(content.content, evals);
      result = [newE];
      break;
    }
    return result;
  };

  DendryEngine.prototype._makeDisplayContent = function(content, useParas) {
    // Raw content can just be returned.
    if (content.content === undefined) {
      if (Array.isArray(content)) {
        return content;
      } else if (useParas) {
        return [{type:'paragraph', content:content}];
      } else {
        return [content];
      }
    } else if (content.stateDependencies === undefined &&
               content.type !== undefined) {
      return [content];
    }

    // Merge in dependencies if we have them
    var stateDepDefs = content.stateDependencies;
    var displayContent = content.content;
    if (stateDepDefs && stateDepDefs.length > 0) {
      var evals = this._evaluateStateDependencies(stateDepDefs);
      if (!Array.isArray(displayContent)) {
        displayContent = [displayContent];
      }
      displayContent = this._mergeStateEvalsInArray(
        displayContent, evals
      );
    }
    return displayContent;
  };

  DendryEngine.prototype._setUpQualities = function() {
    var _Q = this._qualitiesAccessorsPrivate = {};
    var Q = this.state.qualities;
    var that = this;
    objEach(this.game.qualities, function(id, quality) {
      var min = quality.min;
      var max = quality.max;
      var signal = quality.signal || that.game.qualitySignal;
      var predicate = quality.isValid;
      var needsAccessors = (
        min !== undefined ||
        max !== undefined ||
        signal !== undefined ||
        predicate !== undefined
      );
      if (needsAccessors) {
        if (Q[id] !== undefined) {
          _Q[id] = Q[id];
        }
        Q.__defineGetter__(id, function() {
          return _Q[id];
        });
        Q.__defineSetter__(id, function(value) {
          if (min !== undefined && value < min) {
            value = min;
          }
          if (max !== undefined && value > max) {
            value = max;
          }
          var was = _Q[id];
          _Q[id] = value;

          // Check if the new value is not allowed.
          if (!that._runPredicate(predicate, true)) {
            // Reverse the change.
            _Q[id] = value = was;
          }

          // Signal after the change is made.
          if (signal !== undefined && value !== was) {
            var signalObj = {
              signal: signal,
              event: 'quality-change',
              id: id,
              now: value
            };
            if (was !== undefined) {
              signalObj.was = was;
            }
            that.ui.signal(signalObj);
          }
        });
      }
      if (quality.initial !== undefined && Q[id] === undefined) {
        Q[id] = quality.initial;
      }
    });
  };

  DendryEngine.prototype._runActions = function(actions) {
    runActions(actions, this, this.state);
  };

  DendryEngine.prototype._runPredicate = function(predicate, default_) {
    return runPredicate(predicate, default_, this, this.state);
  };

  DendryEngine.prototype._runExpression = function(expression, default_) {
    return runExpression(expression, default_, this, this.state);
  };

  DendryEngine.prototype.__changeScene = function(id) {
    if (this.state.justReturned) {
        this.state.justReturned = false;
    }
    var scene = null;
    var restorePage = false;
    // if id is 'prevScene', go to the previous scene.
    if (id == 'prevScene') {
      if (this.prevSceneId === null) {
        // this really only comes up on the very first scene of the game.
      }
      scene = this.game.scenes[this.state.prevSceneId];
      id = this.state.prevSceneId;
      assert(scene);
    } else if (id == 'prevTopScene') {
      scene = this.game.scenes[this.state.prevTopSceneId];
      id = this.state.prevTopSceneId;
      assert(scene);
    } else if (id == 'jumpScene') {
      scene = this.game.scenes[this.state.jumpSceneId];
      id = this.state.jumpSceneId;
      assert(scene);
    } else if (id === 'backSpecialScene') {
      scene = this.game.scenes[this.state.prevSpecialSceneId];
      id = this.state.prevSpecialSceneId;
      restorePage = true;
      assert(scene);
      // if prevSpecialSceneId is null, this indicates that
      // we're not within a specialScene, and we can set a jump point.
      this.state.prevSpecialSceneId = null;
    } else {
      scene = this.game.scenes[id];
      assert(scene);
    }


    // Leave previous scene.
    var fromId = this.state.sceneId;
    if (!!fromId) {
      this.state.prevSceneId = fromId;
      // TODO: this doesn't necessarily work... there should be
      // a different classification of top scenes
      if (scene.isTop) {
        this.state.prevTopSceneId = fromId;
      }
      if (scene.isSpecial && this.state.prevSpecialSceneId === null) {
        this.state.tempCurrentContent = this.state.currentContent.slice();
        this.state.prevSpecialSceneId = fromId;
      }
      var from = this.getCurrentScene();
      this._runActions(from.onDeparture);
      var fromSignal = from.signal || this.game.sceneSignal;
      if (fromSignal !== undefined) {
        this.ui.signal({signal:fromSignal,
                        event:'scene-departure',
                        id:this.state.sceneId,
                        'to':id});
      }
    }

    // Arrive at current scene.
    this.state.sceneId = id;
    this.state.sceneIdsSinceGoTo.push(id);

    if (scene.setRoot) {
      this.state.rootSceneId = id;
    }
    if (scene.setJump) {
      this.state.jumpSceneId = scene.setJump;
    }

    if (scene.countVisitsMax !== undefined) {
      if (this.state.visits[id] === undefined) {
        this.state.visits[id] = 1;
      } else if (this.state.visits[id] < scene.countVisitsMax) {
        this.state.visits[id]++;
      }
    }

    if (!restorePage && !this.state.justReturned) {
        // If we go back from a special scene (e.g. the stats page),
        // we probably don't want to run the scene actions again.
        this._runActions(scene.onArrival);
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      var signal = {
        signal: sceneSignal,
        event: 'scene-arrival',
        id: id
      };
      if (!!fromId) {
        signal.from = fromId;
      }
      this.ui.signal(signal);
    }

    // We're done with any code that might generate random numbers
    // (except go-to, which will recurse into this method anyway), so we
    // can store the seed which can be used to replay the behavior
    // from here.
    this.state.currentRandomState = this.random.getState();
    //if (!this.state.justReturned) {
        // if the state has just returned from a goSub, we don't display
        // the content?
        // TODO: i'm not sure what the best logic for this is...
        // Maybe the text pre-gosub should be displayed only after the goSub?
    this.displaySceneContent(restorePage);
    //}
    // display background
    if (scene.setBg) {
        this.state.bg = scene.setBg;
        this.ui.setBg(scene.setBg);
    }
    if (scene.setSprites) {
        this.state.sprites = scene.setSprites;
        this.ui.setSprites(scene.setSprites);
    }
    if (scene.audio) {
        this.ui.audio(scene.audio);
    }
    // TODO: there has got to be a better way of doing this.
    if (scene.setTopLeftStyle) {
        this.ui.setSpriteStyle('topLeft', scene.setTopLeftStyle);
    }
    if (scene.setTopRightStyle) {
        this.ui.setSpriteStyle('topRight', scene.setTopRightStyle);
    }
    if (scene.setBottomLeftStyle) {
        this.ui.setSpriteStyle('bottomLeft', scene.setBottomLeftStyle);
    }
    if (scene.setBottomRightStyle) {
        this.ui.setSpriteStyle('bottomRight', scene.setBottomRightStyle);
    }
    // update achievement
    if (scene.achievement) {
        this.state.achievements[scene.achievement] = 1;
        // add a special quality named 'achievement_'
        this.state.qualities['achievement_' + scene.achievement] = 1;
        // set localStorage for achievement
        if (typeof localStorage !== 'undefined') {
            localStorage[this.game.title + '_achievements'] = JSON.stringify(this.state.achievements);
        }
    }

    // Check if we have any reason to leave the scene, or end the game.
    var done = false;
    if (scene.gameOver === true) {
      done = true;
      this.gameOver();
    } else if (scene.goSubEnd && !this.state.justReturnedEnd) {
      // goSub
      var validSubs = [];
      for (var s1 = 0; s1 < scene.goSub.length; ++s1) {
        var sub = scene.goSub[s1];
        if (sub.predicate === undefined ||
            this._runPredicate(sub.predicate)) {
          validSubs.push(sub.id);
        }
      }
    } else if (scene.goTo) {
      // Find all valid gotos.
      var validGoToIds = [];
      for (var i = 0; i < scene.goTo.length; ++i) {
        var goTo = scene.goTo[i];
        if (goTo.predicate === undefined ||
            this._runPredicate(goTo.predicate)) {
          validGoToIds.push(goTo.id);
        }
      }
      if (validGoToIds.length === 1) {
        done = true;
        this.__changeScene(validGoToIds[0]);
      } else if (validGoToIds.length > 1) {
        var randomNumber = this.random.uint32();
        var choice = randomNumber % validGoToIds.length;
        var chosenGoToId = validGoToIds[choice];
        done = true;
        this.__changeScene(chosenGoToId);
      }
    } else if (scene.goToRef) {
      // do some gotoref
      var validRefs = [];
      for (var s = 0; s < scene.goToRef.length; ++s) {
        var ref = scene.goToRef[s];
        if (ref.predicate === undefined ||
            this._runPredicate(ref.predicate)) {
          validRefs.push(ref.id);
        }
      }
      if (validRefs.length === 1) {
        done = true;
        this.__changeScene(this.state.qualities[validRefs[0]]);
      } else if (validRefs.length > 1) {
        var c = this.random.uint32() % validRefs.length;
        var chosenRef = validRefs[c];
        done = true;
        this.__changeScene(this.state.qualities[chosenRef]);
      }
    }

    // dendrynexus: calculate checks
    // WHAT IF scenes have gotos and checks. huh. don't do that. Let's just say that is undefined behavior.
    var hasCheck = false;
    var successProb, isSuccess;
    if (scene.checkQuality && scene.broadDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var scaler = 0.6;
      if (scene.difficultyScaler) {
        scaler = scene.difficultyScaler;
      }
      successProb = calculateBroadDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.broadDifficulty, scaler);
      hasCheck = true;
    } else if (scene.checkQuality && scene.narrowDifficulty && scene.checkSuccessGoTo && scene.checkFailureGoTo) {
      var increment = 0.1;
      if (scene.difficultyIncrement) {
        increment = scene.difficultyIncrement;
      }
      successProb = calculateNarrowDifficulty(this.state.qualities[scene.checkQuality] || 0, scene.narrowDifficulty, increment);
      hasCheck = true;
    }
    if (hasCheck) {
      isSuccess = rollDifficulty(successProb, this.random); 
      // logic for changing the scene on success/failure of the check
      done = true;
      if (isSuccess) {
        this.__changeScene(scene.checkSuccessGoTo);
      } else {
        this.__changeScene(scene.checkFailureGoTo);
      }
    }

    // If we've not ended, nor found a valid go-to, then we try choices.
    if (!done) {
      this.choiceCache = this._compileChoices(scene);
      if (this.choiceCache === null) {
        // Explicitly disallowing game over keeps us stuck here.
        if (scene.gameOver !== false) {
          this.gameOver();
        }
      } else {
        this.displayChoices();
      }
    }
  };

  DendryEngine.prototype.__getChoiceSelectionData = function(idToInfoMap) {
    var result = [];
    for (var id in idToInfoMap) {
      var optionScene = this.game.scenes[id];
      var optionInfo = idToInfoMap[id];

      optionInfo.order = optionInfo.order || optionScene.order || 0;
      optionInfo.priority = optionInfo.priority || optionScene.priority || 1;
      // Because 'null' is a valid frequency, we can't use || to do this.
      if (optionInfo.frequency === undefined) {
        optionInfo.frequency = optionScene.frequency;
        if (optionInfo.frequency === undefined) {
          optionInfo.frequency = 100;
        }
      }
      optionInfo.selectionPriority = 0; // Used by __filterByPriority

      result.push(optionInfo);
    }
    return result;
  };

  DendryEngine.prototype.__filterViewable = function(idToInfoMap) {
    var result = {};
    for (var id in idToInfoMap) {
      var thisScene = this.game.scenes[id];

      // This id fails if it is past its max visits.
      var maxVisits = thisScene.maxVisits;
      if (maxVisits !== undefined) {
        var visits = this.state.visits[id] || 0;
        if (visits >= maxVisits) {
          continue;
        }
      }

      // Fiter out scenes that can't be viewed.
      var canView = this._runPredicate(thisScene.viewIf, true);
      if (!canView) {
        continue;
      }

      // It passes otherwise.
      result[id] = idToInfoMap[id];
    }
    return result;
  };

  DendryEngine.prototype.__getChoiceIdsFromOptions = function(options) {
    var that = this;

    var choices = {};
    each(options, function(option) {
      // Filter out options that can't be viewed.
      if (!that._runPredicate(option.viewIf, true)) {
        return;
      }

      if (option.id.substr(0, 1) === '@') {
        // This is an id, use it.
        var trimmedId = option.id.substring(1);
        var choice = merge(option, {id:trimmedId});
        choices[trimmedId] = choice;
      } else {
        assert(option.id.substr(0, 1) === '#');
        // This is a tag, add all matching ids.
        var ids = that.game.tagLookup[option.id.substring(1)];
        objEach(ids, function(id) {
          if (choices[id] === undefined) {
            choices[id] = merge(option, {id:id});
          }
        });
      }
    });
    return choices;
  };

  // Code based on Undum (MIT License). See CREDITS.
  DendryEngine.prototype.__filterByPriority = function(choices,
                                                       minChoices,
                                                       maxChoices) {
    assert(minChoices === null ||
           maxChoices === null ||
           maxChoices >= minChoices);
    var that = this;

    var committed = [];
    var candidates = [];
    var choice;

    // Work in descending priority order.
    choices.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // First phase: we make sure we have at least our minimum number
    // of choices, and that we consider the minimum possible number of
    // priorities to reach that minimum.
    var lastPriority;
    for (var i = 0; i < choices.length; ++i) {
      choice = choices[i];
      if (choice.priority !== lastPriority) {
        if (lastPriority !== undefined) {
          // Priority has decreased, use the candidates if there are enough.
          if (minChoices === null || i >= minChoices) {
            break;
          }
        }

        // We're going on, so commit our current candidates.
        committed.push.apply(committed, candidates);
        candidates = [];
        lastPriority = choice.priority;
      }
      candidates.push(choice);
    }

    // Second phase: we commit as many candidates as we can without
    // exceeding our maximum.
    // TODO: think about tag choices vs builtin choices
    var committedChoices = committed.length;
    var totalChoices = committedChoices + candidates.length;
    if (maxChoices === null || maxChoices >= totalChoices) {
      // We can use all the candidates without exceeding our maximum.
      committed.push.apply(committed, candidates);
    } else {
      // Take a subset of the candidates, using their relative frequency.
      each(candidates, function(choice) {
        if (choice.frequency === null) {
          choice.selectionPriority = 0; // Always choose.
        } else {
          choice.selectionPriority = that.random.random() / choice.frequency;
        }
      });
      candidates.sort(function(a, b) {
        return a.selectionPriority - b.selectionPriority;
      });
      var extraChoices = maxChoices - committedChoices;
      var chosen = candidates.slice(0, extraChoices);
      committed.push.apply(committed, chosen);
    }

    return committed;
  };

  DendryEngine.prototype.__getChoiceDisplayData = function(choicesSelected) {
    var choiceOutput = [];
    var numChoosable = 0;

    for (var i = 0; i < choicesSelected.length; ++i) {
      var choice = choicesSelected[i];
      var choiceScene = this.game.scenes[choice.id];

      // Figure out if this choice can be chosen.
      var canChoose = true;
      if (choice.chooseIf) {
        canChoose = this._runPredicate(choice.chooseIf, true);
      }
      if (canChoose && choiceScene.chooseIf) {
        canChoose = this._runPredicate(choiceScene.chooseIf, true);
      }

      var title = choice.title || choiceScene.title;
      assert(title);

      var subtitle = null;
      if (!canChoose) {
        subtitle = choice.unavailableSubtitle ||
                   choiceScene.unavailableSubtitle;
      }
      if (!subtitle) {
        subtitle = choice.subtitle || choiceScene.subtitle;
      }


      var finalChoice = {
        id:choice.id,
        canChoose:canChoose,
        title:this._makeDisplayContent(title, false)
      };
      if (subtitle) {
        finalChoice.subtitle = this._makeDisplayContent(subtitle, false);
      }
      // dendrynexus - add success/failure probabilities, and challenges.
      var successProb;
      if (choiceScene.checkQuality && choiceScene.broadDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var scaler = 0.6;
        if (choiceScene.difficultyScaler) {
          scaler = choiceScene.difficultyScaler;
        }
        successProb = calculateBroadDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.broadDifficulty, scaler);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      } else if (choiceScene.checkQuality && choiceScene.narrowDifficulty && choiceScene.checkSuccessGoTo && choiceScene.checkFailureGoTo) {
        var increment = 0.1;
        if (choiceScene.difficultyIncrement) {
          increment = choiceScene.difficultyIncrement;
        }
        successProb = calculateNarrowDifficulty(this.state.qualities[choiceScene.checkQuality] || 0, choiceScene.narrowDifficulty, increment);
        finalChoice.checkQuality = choiceScene.checkQuality;
        finalChoice.successProb = successProb;
        finalChoice.difficulty = displayDifficulty(successProb);
      }

      choiceOutput.push(finalChoice);
      if (canChoose) {
        ++numChoosable;
      }
    }

    return {choices:choiceOutput, numChoosable:numChoosable};
  };

  DendryEngine.prototype._compileChoices = function(scene) {
    assert(scene);

    var options = scene.options;
    var choiceOutput = [];
    var numChoosable = 0;
    if (options !== undefined) {

      var choiceIds = this.__getChoiceIdsFromOptions(options);
      choiceIds = this.__filterViewable(choiceIds);

      var validChoiceData = this.__getChoiceSelectionData(choiceIds);
      var minChoices = scene.minChoices || null;
      var maxChoices = scene.maxChoices || null;
      validChoiceData = this.__filterByPriority(validChoiceData,
                                                minChoices, maxChoices);

      // Sort the result into display order.
      validChoiceData.sort(function(a, b) {
        return a.order - b.order;
      });

      // Now we've chosen our selection, get the final displayable data.
      var data = this.__getChoiceDisplayData(validChoiceData);
      choiceOutput = data.choices;
      numChoosable = data.numChoosable;
    }

    if (numChoosable === 0) {
      // We have no choosable options, so add the default option (NB:
      // this may take us over the max-choices limit).
      var root = this.state.rootSceneId;
      if (root !== this.state.sceneId) {
        var rootSceneChoose = this.game.scenes[root].chooseIf;
        if (!rootSceneChoose || this._runPredicate(rootSceneChoose, true)) {
          choiceOutput.push({id:root, title:'Continue...', canChoose:true});
          ++numChoosable;
        }
      }
    }
    if (numChoosable > 0) {
      return choiceOutput;
    } else {
      return null;
    }
  };


  // dendrynexus - this returns a single available card from the given deck, formatted as an object of the type {id: id, title: title}
  DendryEngine.prototype._drawFromDeck = function(deckId) {
    var scene = this.game.scenes[deckId];
    var viewableScenes = this._compileChoices(scene);
    if (!viewableScenes) {
      return null;
    }
    var choosableScenes = [];
    var currentHand = this.state.currentHands[this.state.sceneId];
    if (!currentHand) {
        currentHand = [];
    }
    currentHand = currentHand.map((x)=>x.id);
    for (var x of viewableScenes) {
      var choiceScene = this.game.scenes[x.id];
      // filter for whether the card is in the hand
      if (x.canChoose && choiceScene.isCard &&  currentHand.indexOf(x.id) < 0) {
        choosableScenes.push(x);
      }
    }
    if (!choosableScenes) {
      return null;
    }
    var randomNumber = this.random.uint32();
    var choice = randomNumber % choosableScenes.length;
    return choosableScenes[choice];
  };

  // ------------------------------------------------------------------------

  // Marsaglia, George (July 2003). 'Xorshift RNGs'.
  // Journal of Statistical Software 8 (14).
  var Random = function(v, w, x, y, z) {
    this.getState = function() {
      return [v, w, x, y, z];
    };
    var uint32Multiply = function(a, b) {
      var aHigh = (a >> 16) & 0xffff;
      var aLow = a & 0xffff;
      var bHigh = (b >> 16) & 0xffff;
      var bLow = b & 0xffff;
      var prodHigh = ((aHigh * bLow) + (aLow * bHigh)) & 0xffff;
      return ((prodHigh << 16) >>> 0) + (aLow * bLow);
    };
    this.uint32 = function() {
      var t = (x ^ (x >>> 7)) >>> 0;
      x = y;
      y = z;
      z = w;
      w = v;
      v = (v ^ (v << 6)) ^ (t ^ (t << 13)) >>> 0;
      return uint32Multiply((y + y + 1), v) >>> 0;
    };
    this.random = function() {
      return this.uint32() * 2.3283064365386963e-10;
    };
  };

  var __next = 1;
  Random.fromUnique = function() {
    var seed = new Date().getTime();
    return Random.fromSeeds([seed, __next++]);
  };

  Random.fromTime = function() {
    return Random.fromSeeds([new Date().getTime()]);
  };

  Random.fromSeeds = function(seeds) {
    var v = 886756453;
    var w = 88675123;
    var x = 123456789;
    var y = 362436069;
    var z = 521288629;

    // The seed hashing function is based on Mash 0.9 (MIT License).
    // See CREDITS.
    var hashSeed = function(data) {
      data = data.toString();
      var n = 0xefc8249d;
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;
      }
      return (n >>> 0) * 2.3283064365386963e-10;
    };

    for (var i = 0; i < seeds.length; i++) {
      var hashedSeed = hashSeed(seeds[i]) * 0x100000000;
      v ^= hashedSeed;
      w ^= hashedSeed;
      x ^= hashedSeed;
      y ^= hashedSeed;
      z ^= hashedSeed;
    }
    return new Random(v, w, x, y, z);
  };

  Random.fromState = function(state) {
    return new Random(state[0], state[1], state[2], state[3], state[4]);
  };

  // ------------------------------------------------------------------------

  module.exports = {
    makeFunctionFromSource: makeFunctionFromSource,
    runActions: runActions,
    runPredicate: runPredicate,
    runExpression: runExpression,
    convertJSONToGame: convertJSONToGame,
    simpleContent: simpleContent,

    getCardinalNumber: getCardinalNumber,
    getOrdinalNumber: getOrdinalNumber,
    getUserQDisplay: getUserQDisplay,
    getFudgeDisplay: getFudgeDisplay,

    DendryEngine: DendryEngine,
    UserInterface: UserInterface,
    NullUserInterface: UserInterface,

    Random: Random
  };
}());

},{}],2:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function($) {
  'use strict';

  var contentToHTML = require('./content/html');
  var engine = require('../engine');

  var BrowserUserInterface = function(game, $content) {
    this.game = game;
    this.$content = $content;
    this._registerEvents();

    this.dendryEngine = new engine.DendryEngine(this, game);
    // TODO: refactor how the settings work - move it all within a single object
    this.base_settings = {'disable_bg': false, 'animate':false, 'animate_bg': true, 'disable_audio': false, 'show_portraits': true};
    this.disable_bg = false;
    this.animate = false;
    this.animate_bg = true;
    this.disable_audio = false;
    // backgrounds and portraits are 100% optional, and most games will not use them.
    this.show_portraits = true;
    this.fade_time = 600;
    this.bg_fade_out_time = 200;
    this.bg_fade_in_time = 1000;
    this.sound_fade_time = 2000;
    this.contentToHTML = contentToHTML;

    // sprites
    this.spriteLocs = {'topLeft': 1, 'topRight': 1, 'bottomLeft': 1, 'bottomRight': 1};
    // current HTMLAudioElement
    this.currentAudio = null;
    // current audio url
    this.currentAudioURL = '';
    this.audioQueue = [];
    // flag for determining if we're on a new page, up until the first choice.
    this.onNewPage = false;

    // for saving
    this.save_prefix = game.title + '_' + game.author + '_save';
    this.max_slots = 8; // max save slots
    this.DateOptions = {hour: 'numeric',
                 minute: 'numeric',
                 second: 'numeric',
                 year: 'numeric', 
                 month: 'short', 
                 day: 'numeric' };
  };
  engine.UserInterface.makeParentOf(BrowserUserInterface);

  // ------------------------------------------------------------------------
  // Main API

  BrowserUserInterface.prototype.displayContent = function(paragraphs) {
    var $html = $(contentToHTML.convert(paragraphs));
    if (this.animate) {
        $html.fadeIn(this.fade_time);
        this.$content.append($html);
    } else {
        this.$content.append($html);
    }
    $html.focus();
    // allow user to add custom stuff on display content (for sidebar in this case)
    if (window && window.onDisplayContent) {
        window.onDisplayContent();
    }
  };
  BrowserUserInterface.prototype.displayGameOver = function() {
    var $p = $('<p>').text(this.getGameOverMsg()).addClass('game-over');
    if (this.animate) {
        $p.fadeIn(this.fade_time);
        this.$content.append($p);
    } else {
        this.$content.append($p);
    }
    $p.focus();
  };
  BrowserUserInterface.prototype.displayChoices = function(choices) {
    var $ul = $('<ul>').addClass('choices');
    for (var i = 0; i < choices.length; ++i) {
      var choice = choices[i];

      var title = contentToHTML.convertLine(choice.title);
      var subtitle = "";
      if (choice.subtitle !== undefined) {
        subtitle = contentToHTML.convertLine(choice.subtitle);
      }

      var $li = $('<li>');
      var $titleHolder = $li;
      if (choice.canChoose) {
        $titleHolder = $('<a>').attr({href: '#', 'data-choice': i});
        $li.html($titleHolder);
      } else {
        $titleHolder.addClass('unavailable');
      }
      $titleHolder.html(title);
      if (choice.checkQuality && choice.difficulty && choice.successProb !== undefined) {
        if (subtitle) {
          subtitle += '<br>';
        }
        subtitle += 'Check: ' + choice.checkQuality + '<br>';
        subtitle += 'Difficulty: ' + choice.difficulty + ' (' + Math.floor(choice.successProb*100) + '%)';
      }
      if (subtitle) {
        $li.append($('<div>').addClass('subtitle').html(subtitle));
      }

      $ul.append($li);
    }
    if (this.animate) {
        $ul.fadeIn(this.fade_time);
        this.$content.append($ul);
    }
    else {
        this.$content.append($ul);
    }
    $ul.focus();
    if (this.onNewPage) {
      this.onNewPage = false;
      if (window && window.onNewPage) {
        window.onNewPage();
      }
    }
  };

  BrowserUserInterface.prototype.newPage = function() {
    if (this.animate) {
        var $content = this.$content;
        this.$content.empty();
        this.$content.children().fadeOut(this.fade_time, function() {
        });
    } else {
        this.$content.empty();
    }
    this.onNewPage = true;

  };

  BrowserUserInterface.prototype.setStyle = function(style) {
    this.$content.removeClass();
    if (style !== undefined) {
      this.$content.addClass(style);
    }
  };

  BrowserUserInterface.prototype.removeChoices = function() {
    $('.choices', this.$content).remove();
    $('.hidden', this.$content).remove();
  };

  BrowserUserInterface.prototype.beginOutput = function() {
    $("#read-marker", this.$content).remove();
    this.$content.append($('<hr>').attr('id', 'read-marker'));
  };

  BrowserUserInterface.prototype.endOutput = function() {
    var $marker = $("#read-marker");
    if (this.animate) {
        if ($marker.length > 0) {
          $('html, body').animate({scrollTop: $marker.offset().top}, this.fade_time);
        } else {
          $('html, body').animate({scrollTop: 0}, this.fade_time);
        }
    }
  };

  BrowserUserInterface.prototype.signal = function(data) {
    // TODO: implement signals - signals contain signal, event, and id
    console.log(data);
    var signal = data.signal;
    var event = data.event; // scene-arrival, scene-display, scene-departure, quality-change
    var scene_id = data.id;
    // TODO: handle this in the game.js for each specific game
    if (window && window.handleSignal) {
        window.handleSignal(signal, event, scene_id);
    }
  };

  // TODO: dendrynexus displays
  // displays the hand.
  BrowserUserInterface.prototype.displayHand = function(hand, maxCards) {
    if (window && window.displayHand) {
      window.displayHand(hand, maxCards);
      return null;
    }
    var $handEl = $('.hand');
    var hasOldHand = false;
    if ($handEl.length == 0) {
        $handEl = $('<ul>').addClass('hand');
        this.$content.append($('<hr>'));
        this.$content.append($('<p>').addClass('hand-description').text('Hand - click a card to play.'));
    } else {
        $handEl.empty();
        hasOldHand = true;
    }
    // display the hand
    for (var i = 0; i < maxCards; i++) {
      var $cardEl = $('<li>').addClass('card-in-hand');
      if (hand[i]) {
        var card = hand[i];
        // create an <a> element, with an image nested inside.
        var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
        var $title = $('<span>').addClass('card-caption').text(card.title);
        // if there is an image, set the image; otherwise, set image to a gradient?
        if (card.image) {
          var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
          $cardLink.append($cardImage);
        } else {
        }
        if (card.subtitle) {
          var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
          $cardLink.append($cardSubtitle);
        }
        $cardEl.append($cardLink);
        $cardEl.append($title);
        $handEl.append($cardEl);
      } else {
        var $blankCardDiv = $('<div>').addClass('blank-card');
        $cardEl.append($blankCardDiv);
      }
      $handEl.append($cardEl);
    }
    if (!hasOldHand) {
        this.$content.append($handEl);
    }
  };


  BrowserUserInterface.prototype.displayDecks = function(decks) {
    if (window && window.displayDecks) {
      window.displayDecks(decks);
      return null;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('deck-description').text('Decks - click a deck to draw a card.'));
    var $decksEl = $('<ul>').addClass('decks');
    for (var deck of decks) {
      console.log(deck);
      var $deckEl = $('<li>').addClass('deck');
      // create an <a> element, with an image nested inside.
      var $deckLink = $('<a>').addClass('card').attr({href: '#', 'card-id': deck.id, title: deck.title});
      var $title = $('<span>').addClass('card-caption').text(deck.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (deck.image) {
        var $deckImage = $('<img>').addClass('card-img').attr({src: deck.image});
        $deckLink.append($deckImage);
      } else {
        // TODO: set alternative background for $deckLink to a gradient
      }
      if (deck.subtitle) {
        // TODO: if there's a subtitle, create a tooltip?
        var $deckSubtitle = $('<span>').addClass('card-tooltip').text(deck.subtitle);
        $deckLink.append($deckSubtitle);
      }
      $deckEl.append($deckLink);
      $deckEl.append($title);
      $decksEl.append($deckEl);
    }
    this.$content.append($decksEl);
  };

  // displays pinned cards for dendryscope
  BrowserUserInterface.prototype.displayPinnedCards = function(cards) {
    if (cards.length == 0) {
      return null;
    }
    if (window && window.displayPinnedCards) {
      window.displayPinnedCards(cards);
      return null;
    }
    this.$content.append($('<hr>'));
    this.$content.append($('<p>').addClass('pinned-text-description').text('Pinned cards - click a card to play.'));
    var $cardsEl = $('<ul>').addClass('pinned-cards');
    for (var card of cards) {
      var $cardEl = $('<li>').addClass('pinned-card');
      // create an <a> element, with an image nested inside.
      var $cardLink = $('<a>').addClass('card').attr({href: '#', 'card-id': card.id, title: card.title});
      var $title = $('<span>').addClass('card-caption').text(card.title);
      // if there is an image, set the image; otherwise, set image to a gradient?
      if (card.image) {
        var $cardImage = $('<img>').addClass('card-img').attr({src: card.image});
        $cardLink.append($cardImage);
      } else {
      }
      if (card.subtitle) {
        var $cardSubtitle = $('<span>').addClass('card-tooltip').text(card.subtitle);
        $cardLink.append($cardSubtitle);
      }
      $cardEl.append($cardLink);
      $cardEl.append($title);
      $cardsEl.append($cardEl);
    }
    this.$content.append($cardsEl);
  };

  // visual extensions

  BrowserUserInterface.prototype.setBg = function(image_url) {
      if (this.disable_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            $('#bg1').css('background-image', 'none'); 
      }
      else if (!image_url || image_url == 'none' || image_url == 'null') {
          if (this.animate_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            setTimeout(function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').removeClass('content_hidden');
                $('#bg1').addClass('content_visible');
            },
            100);
          } else {
              $('#bg1').css('background-image', 'none'); 
          }
      } else if (image_url.startsWith('#') || image_url.startsWith('rgba(') || image_url.startsWith('rgb(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').css('background-color', image_url);
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', 'none'); 
            });
            console.log('changing background color ' + image_url);
          } else {
              $('#bg1').css('background-image', 'none'); 
              $('#bg1').css('bacground-color', image_url);
          }
      } else if (image_url.startsWith('linear-gradient(')) {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', image_url); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', image_url); 
            });
            console.log('changing background gradient ' + image_url);
          } else {
              $('#bg1').css('background-image', image_url); 
          }
      } else {
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'url("' + image_url + '")'); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', $('#bg1').css('background-image'));
            });
      } else {
          $('#bg1').css('background-image', 'url("' + image_url + '")'); 
      }
    }
  };

  // set sprites given data
  // data is a list of two-element lists, where the first element is location
  // (one of topLeft, topRight, bottomLeft, bottomRight)
  // and the second element is the sprite.
  BrowserUserInterface.prototype.setSprites = function(data) {
      if (window && window.setSprites) {
          window.setSprites(data);
          return;
      }
      if (!this.show_portraits || data == 'none' || data == 'clear') {
          $('#topLeftSprite').children().fadeOut(this.fade_time, function() {$('#topLeftSprite').empty();});
          $('#topRightSprite').children().fadeOut(this.fade_time, function() {$('#topRightSprite').empty();});
          $('#bottomLeftSprite').children().fadeOut(this.fade_time, function() {$('#bottomLeftSprite').empty();});
          $('#bottomRightSprite').children().fadeOut(this.fade_time, function() {$('#bottomRightSprite').empty();});
          return;
      } else {
          if (data instanceof Array) {
              for (var i = 0; i < data.length; i++) {
                  var loc = data[i][0];
                  var img = data[i][1];
                  this.setSprite(loc, img);
              }
          } else if (data) {
                for (var key in Object.keys(data)) {
                  sprites.push([key, data[key]]);
              }
          }
      }
  };

  BrowserUserInterface.prototype.setSprite = function(loc, img) {
      if (!this.show_portraits) {
          return;
      }
      if (window && window.setSprite) {
          window.setSprite(loc, img);
          return;
      }
      loc = loc.toLowerCase();
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      }
      //targetSprite.empty();
      if (img == 'none' || img == 'clear') {
          delete this.dendryEngine.state.sprites[loc];
          targetSprite.fadeOut(this.fade_time, function() {targetSprite.empty();});
          return;
      } else {
          this.dendryEngine.state.sprites[loc] = img;
          targetSprite.fadeOut(this.fade_time, function() {
              targetSprite.emtpy();
              var image = new Image();
              image.src = img;
              targetSprite.append(image);
              console.log('fadeIn');
              targetSprite.fadeIn(this.fade_time);
          });
      }
  };

  BrowserUserInterface.prototype.setSpriteStyle = function(loc, style) {
      if (window && window.setSpriteStyle) {
          window.setSpriteStyle(loc, style);
          return;
      }
      var targetSprite;
      if (loc == 'topleft') {
          targetSprite = $('#topLeftSprite');
      } else if (loc == 'topright') {
          targetSprite = $('#topRightSprite');
      } else if (loc == 'bottomleft') {
          targetSprite = $('#bottomLeftSprite');
      } else if (loc == 'bottomright') {
          targetSprite = $('#bottomRightSprite');
      } else {
          return;
      }
      targetSprite.css(style);
  };

  // play audio with js
  // audio is a space-separated string with at least one entry.
  // the first entry will be a file url.
  // the second-nth entries are words describing how the file will be played:
  // 'queue' for playing the music next after the current audio ends
  // 'loop' if this music will loop indefinitely.
  // 'nofade' if the sound will be played instantly without a fadein or fadeout.
  BrowserUserInterface.prototype.audio = function(audio) {
      if (this.disable_audio) {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          return;
      }
      var audioData = audio.split(' ');
      var isLoop = audioData.includes('loop');
      var isQueue = audioData.includes('queue');
      var noFade = audioData.includes('nofade');
      var audioFile = audioData[0];
      var currentAudio = this.currentAudio;
      var fadeTime = this.sound_fade_time;
      var loopCurrent = false;
      if (audioFile == 'null' || audioFile == 'none') {
          if (this.currentAudio) {
              $(currentAudio).animate({volume: 0},
                  this.sound_fade_time,
                  function() {
                      currentAudio.pause();
              });
              this.currentAudio.loop = false;
          }
      } else {
          // fadeout current audio, then fade-in new audio
          console.log('new audio:', audioFile, 'current audio:',  this.currentAudioURL);
          if (this.currentAudio && (this.currentAudioURL == audioFile || isQueue)) {
              if (!currentAudio.ended && !currentAudio.paused) {
                  console.log('adding music to queue');
                  this.audioQueue = [audioFile];
                  var audioQueue = this.audioQueue;
                  this.currentAudio.onended = function() {
                      var newAudio = audioQueue.pop();
                      if (newAudio) {
                          currentAudio.src = newAudio;
                          console.log('playing from queue');
                          currentAudio.play();
                          $(currentAudio).animate({volume: 1},
                              fadeTime);
                          // asdkfl;;sajd;lkjafdsdsaf;kjldjsfa;kl
                          window.dendryUI.currentAudioURL = newAudio;
                      }
                  };
              } else {
                  this.currentAudioURL = audioFile;
                  currentAudio.src = audioFile;
                  console.log('Fading in new audio');
                  currentAudio.volume = 0;
                  currentAudio.play();
                  $(currentAudio).animate({volume: 1},
                      fadeTime);
              }
          }
          else if (this.currentAudio) {
              this.currentAudioURL = audioFile;
              console.log('currentAudio present,  fading out current audio');
              // reset the current audio function
              currentAudio.onended = function() {};
              if (noFade) {
                  currentAudio.pause();
                  currentAudio.src = audioFile;
                  currentAudio.play();
              } else {
                  $(currentAudio).animate({volume: 0},
                      this.sound_fade_time,
                      function() {
                          console.log(currentAudio);
                          currentAudio.src = audioFile;
                          console.log('Fading in new audio');
                          currentAudio.play();
                          $(currentAudio).animate({volume: 1},
                              fadeTime);
                  });
              }
          } else {
              this.currentAudio = new Audio(audioFile);
              this.currentAudio.volume = 0;
              this.currentAudio.play();
              $(this.currentAudio).animate({volume: 1}, this.sound_fade_time);
          }
          if (isLoop) {
              this.currentAudio.loop = true;
          } else {
              this.currentAudio.loop = false;
          }
          // https://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out
      }
  };

  BrowserUserInterface.prototype.saveSettings = function() {
    if (typeof localStorage !== 'undefined') {
        localStorage[this.game.title + '_animate'] = this.animate;
        localStorage[this.game.title + '_disable_bg'] = this.disable_bg;
        localStorage[this.game.title + '_animate_bg'] = this.animate_bg;
        localStorage[this.game.title + '_show_portraits'] = this.show_portraits;
        localStorage[this.game.title + '_disable_audio'] = this.disable_audio;
    }
  };

  // TODO: refactor this to take in arbitrary lists of settings
  BrowserUserInterface.prototype.loadSettings = function(defaultSettings) {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_animate']) {
            this.animate = localStorage[this.game.title + '_animate'] != 'false' || false;
        } else {
            if (defaultSettings && defaultSettings.animate) {
                this.animate = defaultSettings.animate;
            } else {
                this.animate = false;
            }
        }
        if (localStorage[this.game.title + '_disable_bg']) {
            this.disable_bg = localStorage[this.game.title + '_disable_bg'] != 'false' || false ;
        } else {
            if (defaultSettings && defaultSettings.disable_bg) {
                this.disable_bg = defaultSettings.disable_bg;
            } else {
                this.disable_bg = false;
            }
        }
        if (localStorage[this.game.title + '_animate_bg']) {
            this.animate_bg = localStorage[this.game.title + '_animate_bg'] != 'false' || false;
        } else {
            if (defaultSettings && defaultSettings.animate_bg) {
                this.animate_bg = defaultSettings.animate_bg;
            } else {
                this.animate_bg = true;
            }
        }
        if (localStorage[this.game.title + '_show_portraits']) {
            this.show_portraits = localStorage[this.game.title + '_show_portraits'] != 'false' || false;
        } else {
            if (defaultSettings && defaultSettings.show_portraits) {
                this.show_portraits = defaultSettings.show_portraits;
            } else {
                this.show_portraits = true;
            }
        }
        if (localStorage[this.game.title + '_disable_audio']) {
            this.disable_audio = localStorage[this.game.title + '_disable_audio'] != 'false' || false;
        } else {
            if (defaultSettings && defaultSettings.disable_audio) {
                this.disable_audio = defaultSettings.disable_audio;
            } else {
                this.disable_audio = false;
            }
        }
    }
  };

  BrowserUserInterface.prototype.toggle_audio = function(enable_audio) {
      if (enable_audio) {
          this.disable_audio = false;
      } else {
          if (this.currentAudio) {
              this.currentAudio.pause();
              this.currentAudio.loop = false;
          }
          this.disable_audio = true;
      }
  };


  // save functions
  BrowserUserInterface.prototype.autosave = function() {
      var oldData = localStorage[this.save_prefix+'_a0'];
      if (oldData) {
          localStorage[this.save_prefix+'_a1'] = oldData;
          localStorage[this.save_prefix+'_timestamp_a1'] = localStorage[this.save_prefix+'_timestamp_a0'];
      }
      var slot = 'a0';
      var saveString = JSON.stringify(this.dendryEngine.getExportableState());
      localStorage[this.save_prefix + '_' + slot] = saveString;
      var scene = this.dendryEngine.state.sceneId;
      var date = new Date(Date.now());
      date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
      localStorage[this.save_prefix +'_timestamp_' + slot] = date;
      this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.quickSave = function() {
    var saveString = JSON.stringify(this.dendryEngine.getExportableState());
    localStorage[this.save_prefix + '_q'] = saveString;
    window.alert('Saved.');
  };

  BrowserUserInterface.prototype.saveSlot = function(slot) {
    var saveString = JSON.stringify(this.dendryEngine.getExportableState());
    localStorage[this.save_prefix + '_' + slot] = saveString;
    var scene = this.dendryEngine.state.sceneId;
    var date = new Date(Date.now());
    date = scene + '\n(' + date.toLocaleString(undefined, this.DateOptions) + ')';
    localStorage[this.save_prefix + '_timestamp_' + slot] = date;
    this.populateSaveSlots(slot + 1, 2);
  };

  BrowserUserInterface.prototype.quickLoad = function() {
    if (localStorage[this.save_prefix + '_q']) {
      var saveString = localStorage[this.save_prefix + '_q'];
      this.dendryEngine.setState(JSON.parse(saveString));
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.loadSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      var saveString = localStorage[this.save_prefix + '_' + slot];
      this.dendryEngine.setState(JSON.parse(saveString));
      this.hideSaveSlots();
      window.alert('Loaded.');
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.deleteSlot = function(slot) {
    if (localStorage[this.save_prefix + '_' + slot]) {
      localStorage[this.save_prefix + '_' + slot] = '';
      localStorage[this.save_prefix + '_timestamp_' + slot] = '';
      this.populateSaveSlots(slot + 1, 2);
    } else {
      window.alert('No save available.');
    }
  };

  BrowserUserInterface.prototype.populateSaveSlots = function(max_slots, max_auto_slots) {
    // this fills in the save information
    var that = this;
    function createLoadListener(i) {
      return function(evt) {
        that.loadSlot(i);
      };
    }
    function createSaveListener(i) {
      return function(evt) {
        that.saveSlot(i);
      };
    }
    function createDeleteListener(i) {
      return function(evt) {
        that.deleteSlot(i);
      };
    }
      function populateSlot(id) {
          var save_element = document.getElementById('save_info_' + id);
          var save_button = document.getElementById('save_button_' + id);
          var delete_button = document.getElementById('delete_button_' + id);
          if (localStorage[that.save_prefix + '_' + id]) {
              var timestamp = localStorage[that.save_prefix+'_timestamp_' + id];
              save_element.textContent = timestamp;
              save_button.textContent = "Load";
              save_button.onclick = createLoadListener(id);
              delete_button.onclick = createDeleteListener(id);
          } else {
              save_button.textContent = "Save";
              save_element.textContent = "Empty";
              save_button.onclick = createSaveListener(id);
          }

      }
      for (var i = 0; i < max_slots; i++) {
          populateSlot(i);
      }
      for (i = 0; i < max_auto_slots; i++) {
          populateSlot('a'+i);
      }

  };

  BrowserUserInterface.prototype.showSaveSlots = function() {
    var save_element = document.getElementById('save');
    save_element.style.display = 'block';
    this.populateSaveSlots(this.max_slots, 2);
    var that = this;
    if (!save_element.onclick) {
      save_element.onclick = function(evt) {
        var target = evt.target;
        var save_element = document.getElementById('save');
        if (target == save_element) {
          that.hideSaveSlots();
        }
      };
    }
  };

  BrowserUserInterface.prototype.hideSaveSlots = function() {
    var save_element = document.getElementById('save');
    save_element.style.display = 'none';
  };


  // functions for dealing with options
  BrowserUserInterface.prototype.setOption = function(option, toggle) {
      this[option] = toggle; 
      this.saveSettings();
  };

  BrowserUserInterface.prototype.populateOptions = function() {
    var disable_bg = this.disable_bg;
    var animate = this.animate;
    var animate_bg = this.animate_bg;
    if (disable_bg) {
        $('#backgrounds_no')[0].checked = true;
    } else {
        $('#backgrounds_yes')[0].checked = true;
    }
    if (animate) {
        $('#animate_yes')[0].checked = true;
    } else {
        $('#animate_no')[0].checked = true;
    }
    if (animate_bg) {
        $('#animate_bg_yes')[0].checked = true;
    } else {
        $('#animate_bg_no')[0].checked = true;
    }
  };

  BrowserUserInterface.prototype.showOptions = function() {
      var save_element = document.getElementById('options');
      this.populateOptions();
      save_element.style.display = "block";
      if (!save_element.onclick) {
          save_element.onclick = function(evt) {
              var target = evt.target;
              var save_element = document.getElementById('options');
              if (target == save_element) {
                  this.hideOptions();
              }
          };
      }
  };

  // ------------------------------------------------------------------------
  // Additional methods

  BrowserUserInterface.prototype.getGameOverMsg = function() {
    return 'Game Over (reload to read again)';
  };

  BrowserUserInterface.prototype._registerEvents = function() {
    var that = this;
    this.$content.on('click', 'ul.choices li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = parseInt($(this).attr('data-choice'));
      that.dendryEngine.choose(choice);
      return false;
    });
    this.$content.on('click', 'ul.choices li', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('a', this).click();
      return false;
    });
    // dendrynexus - onclick for decks and cards
    this.$content.on('click', 'ul.decks li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      console.log('Choice:', choice);
      that.dendryEngine.drawCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.hand li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      console.log('Choice:', choice);
      that.dendryEngine.playCard(choice);
      return false;
    });
    this.$content.on('click', 'ul.pinned-cards li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = $(this).attr('card-id');
      console.log('Choice:', choice);
      that.dendryEngine.playPinnedCard(choice);
      return false;
    });
  };

  // ------------------------------------------------------------------------
  // Run when loaded.

  var main = function() {
    engine.convertJSONToGame(window.game.compiled, function(err, game) {
      if (err) {
        throw err;
      }

      var ui = new BrowserUserInterface(game, $('#content'));
      window.dendryUI = ui;
      // Allow the ui system to be customized before use.
      if (window.dendryModifyUI !== undefined) {
        // If it returns true, then we don't need to begin the game.
        var dontStart = window.dendryModifyUI(ui);
        if (dontStart) {
          return;
        }
      }
      ui.dendryEngine.beginGame();
    });
  };
  $(main);

}(jQuery));

},{"../engine":1,"./content/html":3}],3:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  var _contentObjectToHTML = function(contentObj) {
    if (contentObj.type === undefined) {
      // if the game defines the function window.displayText, then that function is called to format the text.
      // this is used for game-specific formatting.
      if (typeof(window) !== "undefined" && window.displayText) {
          contentObj = window.displayText(contentObj);
      }
      return contentObj;
    } else {
      switch (contentObj.type) {
      case 'emphasis-1':
        return '<em>' + _contentToHTML(contentObj.content) + '</em>';
      case 'emphasis-2':
        return '<strong>' + _contentToHTML(contentObj.content) + '</strong>';
      case 'emphasis-3':
        return '<code>' + _contentToHTML(contentObj.content) + '</code>';
      case 'hidden':
        return '<span class="hidden">' + _contentToHTML(contentObj.content) +
          '</span>';
      case 'line-break':
        return '<br>';

      // We can't handle elements that require state-dependency.
      // raw html for magic
      case 'magic':
        return contentObj.content;
      case 'insert':
        /* falls through */
      case 'conditional':
        throw new Error(
          contentObj.type + ' should have been evaluated by now.'
          );
      }
    }
  };

  var _contentToHTML = function(content) {
    if (Array.isArray(content)) {
      var result = [];
      for (var i = 0; i < content.length; ++i) {
        var contentObj = content[i];
        result.push(_contentObjectToHTML(contentObj));
      }
      return result.join('');
    } else {
      return _contentObjectToHTML(content);
    }
  };

  var _paragraphsToHTML = function(paragraphs) {
    var result = [];
    for (var i = 0; i < paragraphs.length; ++i) {
      var paragraph = paragraphs[i];
      switch (paragraph.type) {
      case 'heading':
        result.push('<h1>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</h1>');
        break;
      case 'paragraph':
        result.push('<p>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</p>');
        break;
      case 'quotation':
        result.push('<blockquote>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'attribution':
        result.push('<blockquote class="attribution">');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'magic':
        result.push(paragraph.content);
        break;
      case 'hrule':
        result.push('<hr>');
        break;
      }
    }
    return result.join('');
  };

  module.exports = {
    convert: _paragraphsToHTML,
    convertLine: _contentToHTML
  };
}());

},{}]},{},[2]);
