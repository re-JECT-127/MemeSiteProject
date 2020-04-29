CREATE TABLE `memes` (
  `meme_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `filename` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


INSERT INTO `memes` (`meme_id`, `name`, `filename`) VALUES
(1, 'Lotr',  'https://blogi.oulunluuppi.fi/wp-content/uploads/2019/08/meme.jpg'),
(2, 'Lotr2',  'https://blogi.oulunluuppi.fi/wp-content/uploads/2019/08/meme.jpg');

ALTER TABLE `memes`
  ADD PRIMARY KEY (`meme_id`);

ALTER TABLE `memes`
  MODIFY `meme_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


CREATE TABLE `meme_user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

ALTER TABLE `meme_user`
  ADD PRIMARY KEY (`user_id`);

ALTER TABLE `meme_user`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


insert into meme_user (user_id, name, email, password) VALUES (3, 'testi', 'testi@testi.fi', 'testi') 

CREATE TABLE `tags` (
`tags_id` int(11) NOT NULL,
`title` varchar(32) NOT NULL
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

ALTER TABLE `tags`
	ADD PRIMARY KEY(`tags_id`);

INSERT INTO `tags` (`tags_id`, `title`) VALUES
	(1, "pog");

CREATE TABLE `images_tags` (
`image_id` int(11) NOT NULL,
`tag_id` int(11) NOT NULL,
PRIMARY KEY (image_id, tag_id)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;


CREATE TABLE `images_tags_logs` (
`image_id` int(11) NOT NULL,
`tag_id` int(11) NOT NULL,
`createdBy` varchar(16) NOT NULL,
`dateCreate` datetime NOT NULL,
`deletedBy` varchar(16) NULL,
`dateDelete` datetime NULL,
PRIMARY KEY (image_id, tag_id, dateCreate)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;
