/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates('default', {
    // The name of sub folder which hold the shortcut preview images of the
    // templates.
    imagesPath: CKEDITOR.getUrl(CKEDITOR.plugins.getPath('templates') + 'templates/images/'),
    // The templates definitions.
    templates: [
        {
            title: 'PARALLAX',
            image: 'template1.gif',
            description: 'PARALLAX',
            html: '<section class="parallax parallax-2 padding-xxs" style="background-image: url(\'/SmartyBase/assets/images/demo/vision-min.jpg\');">' +
                    '<div class="overlay dark-4"><!-- dark overlay [0 to 9 opacity] --></div>' +
                    '<div class="container">' +
                    '<div class="row countTo-md text-center">' +
                    '<div class="col-xs-6 col-sm-3">' +
                    '<i class="fa fa-users"></i>' +
                    '<span class="countTo" data-speed="3000">1303</span>' +
                    '<h5>HAPPY CLIENTS</h5>' +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-3">' +
                    '<i class="fa fa-code"></i>' +
                    '<span class="countTo" data-speed="3000">56000</span>' +
                    '<h5>LINES OF CODE</h5>' +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-3">' +
                    '<i class="fa fa-twitter"></i>' +
                    '<span class="countTo" data-speed="3000">4897</span>' +
                    '<h5>TWITTER</h5>' +
                    '</div>' +
                    '<div class="col-xs-6 col-sm-3">' +
                    '<i class="fa fa-facebook"></i>' +
                    '<span class="countTo" data-speed="3000">9877</span>' +
                    '<h5>FACEBOOK</h5>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</section>'

        },
        {
            title: 'FEATURED BOXES 3',
            image: 'FEATURED_ BOXES_3.gif',
            description: 'FEATURED BOXES 3',
            html: '<!-- -->'+
'			<section>'+
'				<div class="container">'+
'					<!-- FEATURED BOXES 3 -->'+
'					<div class="row">'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-circle-compass"></i>'+
'								<h4>Design</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-piechart"></i>'+
'								<h4>Analytics</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-strategy"></i>'+
'								<h4>Development</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-streetsign"></i>'+
'								<h4>Marketing</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus. </p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-bargraph"></i>'+
'								<h4>Statistics</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-trophy"></i>'+
'								<h4>Winners</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-profile-female"></i>'+
'								<h4>Clients</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus.</p>'+
'							</div>'+
'						</div>'+
'						<div class="col-md-3 col-xs-6 margin-bottom-30">'+
'							<div class="text-center">'+
'								<i class="ico-light ico-lg ico-rounded ico-hover et-heart"></i>'+
'								<h4>Favourite</h4>'+
'								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus. </p>'+
'							</div>'+
'						</div>'+
'					</div>'+
'					<!-- /FEATURED BOXES 3 -->'+
'				</div>'+
'			</section>'+
'			<!-- / -->'
        },
        {
            title: 'Pricing 1',
            image: 'template1.gif',
            description: 'Pricing 1',
            html: '			<section>'+
'				<div class="container">'+
'					<div class="heading-title heading-line-single text-center">'+
'						<h3>Mega Price 1</h3>'+
'					</div>'+
'					<!-- Full 1 -->'+
'					<div class="row mega-price-table">'+
'						<div class="col-md-4 col-sm-6 hidden-sm hidden-xs pricing-desc">'+
'							<div class="pricing-title">'+
'								<h3>Hosting Plans <small>#1</small></h3>'+
'								<p class="text-muted">Lorem ipsum dolor sit amet</p>'+
'							</div>'+
'							<ul class="list-unstyled">'+
'								<li>Data Storage</li>'+
'								<li class="alternate">Monthly Traffic</li>'+
'								<li>Email Accounts</li>'+
'								<li class="alternate">MYSQL Databases</li>'+
'								<li>Daily Backup</li>'+
'								<li class="alternate">Free Domain</li>'+
'								<li>Website Statistics</li>'+
'								<li class="alternate">Online Support</li>'+
'								<li>Premium DNS</li>'+
'								<li class="alternate">SSL Certificate</li>'+
'							</ul>'+
'						</div>'+
'						<div class="col-md-2 col-sm-6 block">'+
'							<div class="pricing">'+
'								<div class="pricing-head">'+
'									<h3>Basic</h3>'+
'									<small>per month</small>'+
'								</div>'+
'								<h4><!-- price -->'+
'									<small>$</small>9<sup>.49</sup>'+
'								</h4><!-- /price -->'+
'								<!-- option list -->'+
'								<ul class="pricing-table list-unstyled">'+
'									<li>'+
'										20 Gb'+
'										<span class="hidden-md hidden-lg">Data Storage</span>'+
'									</li>'+
'									<li class="alternate">'+
'										100 GB <span class="hidden-md hidden-lg">Monthly Traffic</span>'+
'									</li>'+
'									<li>'+
'										10 <span class="hidden-md hidden-lg">Email Accounts</span>'+
'									</li>'+
'									<li class="alternate">'+
'										100'+
'										<span class="hidden-md hidden-lg">MYSQL Databases</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg"> Daily Backup</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Free Domain</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">Website Statistics</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Online Support</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">Premium DNS</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">SSL Certificate</span>'+
'									</li>'+
'								</ul>'+
'								<!-- /option list -->'+
'								<!-- button -->'+
'								<div class="btn-group dropup fullwidth">'+
'									<button type="button" class="btn btn-primary dropdown-toggle fullwidth text-left" data-toggle="dropdown">'+
'										<i class="fa fa-shopping-cart"></i>'+
'										Sign Up'+
'										<span class="caret pull-right"></span>'+
'									</button>'+
'									<ul class="dropdown-menu" role="menu">'+
'										<li><a href="#">14 day Free Trial </a></li>'+
'										<li><a href="#">$3.99 One Month</a></li>'+
'										<li><a href="#">$49.99 Six Months</a></li>'+
'										<li><a href="#">$99.99 One Year</a></li>'+
'									</ul>'+
'								</div><!-- /button -->'+
'							</div>'+
'						</div>'+
'						<div class="col-md-2 col-sm-6 block">'+
'							<div class="pricing popular">'+
'								<div class="pricing-head">'+
'									<h3>Standard</h3>'+
'									<small>per month</small>'+
'								</div>'+
'								<h4><!-- price -->'+
'									<small>$</small>19<sup>.49</sup>'+
'								</h4><!-- /price -->'+
'								<!-- option list -->'+
'								<ul class="pricing-table list-unstyled">'+
'									<li>'+
'										500 Gb'+
'										<span class="hidden-md hidden-lg">Data Storage</span>'+
'									</li>'+
'									<li class="alternate">'+
'										300 GB <span class="hidden-md hidden-lg">Monthly Traffic</span>'+
'									</li>'+
'									<li>'+
'										200 <span class="hidden-md hidden-lg">Email Accounts</span>'+
'									</li>'+
'									<li class="alternate">'+
'										150'+
'										<span class="hidden-md hidden-lg">MYSQL Databases</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg"> Daily Backup</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Free Domain</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Website Statistics</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Online Support</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">Premium DNS</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">SSL Certificate</span>'+
'									</li>'+
'								</ul>'+
'								<!-- /option list -->'+
'								<!-- button -->'+
'								<div class="btn-group dropup fullwidth">'+
'									<button type="button" class="btn btn-primary dropdown-toggle fullwidth text-left" data-toggle="dropdown">'+
'										<i class="fa fa-shopping-cart"></i>'+
'										Sign Up'+
'										<span class="caret pull-right"></span>'+
'									</button>'+
'									<ul class="dropdown-menu" role="menu">'+
'										<li><a href="#">14 day Free Trial </a></li>'+
'										<li><a href="#">$3.99 One Month</a></li>'+
'										<li><a href="#">$49.99 Six Months</a></li>'+
'										<li><a href="#">$99.99 One Year</a></li>'+
'									</ul>'+
'								</div><!-- /button -->'+
'							</div>'+
'						</div>'+
'						<div class="col-md-2 col-sm-6 block">'+
'							<div class="pricing">'+
'								<div class="pricing-head">'+
'									<h3>Super</h3>'+
'									<small>per month</small>'+
'								</div>'+
'								<h4><!-- price -->'+
'									<small>$</small>49<sup>.49</sup>'+
'								</h4><!-- /price -->'+
'								<!-- option list -->'+
'								<ul class="pricing-table list-unstyled">'+
'									<li>'+
'										1000 Gb'+
'										<span class="hidden-md hidden-lg">Data Storage</span>'+
'									</li>'+
'									<li class="alternate">'+
'										800 GB <span class="hidden-md hidden-lg">Monthly Traffic</span>'+
'									</li>'+
'									<li>'+
'										300 <span class="hidden-md hidden-lg">Email Accounts</span>'+
'									</li>'+
'									<li class="alternate">'+
'										200'+
'										<span class="hidden-md hidden-lg">MYSQL Databases</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg"> Daily Backup</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Free Domain</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Website Statistics</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Online Support</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">Premium DNS</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-times"></i>'+
'										<span class="hidden-md hidden-lg">SSL Certificate</span>'+
'									</li>'+
'								</ul>'+
'								<!-- /option list -->'+
'								<!-- button -->'+
'								<div class="btn-group dropup fullwidth">'+
'									<button type="button" class="btn btn-primary dropdown-toggle fullwidth text-left" data-toggle="dropdown">'+
'										<i class="fa fa-shopping-cart"></i>'+
'										Sign Up'+
'										<span class="caret pull-right"></span>'+
'									</button>'+
'									<ul class="dropdown-menu" role="menu">'+
'										<li><a href="#">14 day Free Trial </a></li>'+
'										<li><a href="#">$3.99 One Month</a></li>'+
'										<li><a href="#">$49.99 Six Months</a></li>'+
'										<li><a href="#">$99.99 One Year</a></li>'+
'									</ul>'+
'								</div><!-- /button -->'+
'							</div>'+
'						</div>'+
'						<div class="col-md-2 col-sm-6 block">'+
'							<div class="pricing">'+
'								<div class="pricing-head">'+
'									<h3>Ultimate</h3>'+
'									<small>per month</small>'+
'								</div>'+
'								<h4><!-- price -->'+
'									<small>$</small>99<sup>.49</sup>'+
'								</h4><!-- /price -->'+
'								<!-- option list -->'+
'								<ul class="pricing-table list-unstyled">'+
'									<li>'+
'										1500 Gb'+
'										<span class="hidden-md hidden-lg">Data Storage</span>'+
'									</li>'+
'									<li class="alternate">'+
'										1000 GB <span class="hidden-md hidden-lg">Monthly Traffic</span>'+
'									</li>'+
'									<li>'+
'										100 <span class="hidden-md hidden-lg">Email Accounts</span>'+
'									</li>'+
'									<li class="alternate">'+
'										1000'+
'										<span class="hidden-md hidden-lg">MYSQL Databases</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg"> Daily Backup</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Free Domain</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Website Statistics</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Online Support</span>'+
'									</li>'+
'									<li>'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">Premium DNS</span>'+
'									</li>'+
'									<li class="alternate">'+
'										<i class="fa fa-check"></i>'+
'										<span class="hidden-md hidden-lg">SSL Certificate</span>'+
'									</li>'+
'								</ul>'+
'								<!-- /option list -->'+
'								<!-- button -->'+
'								<div class="btn-group dropup fullwidth">'+
'									<button type="button" class="btn btn-primary dropdown-toggle fullwidth text-left" data-toggle="dropdown">'+
'										<i class="fa fa-shopping-cart"></i>'+
'										Sign Up'+
'										<span class="caret pull-right"></span>'+
'									</button>'+
'									<ul class="dropdown-menu" role="menu">'+
'										<li><a href="#">14 day Free Trial </a></li>'+
'										<li><a href="#">$3.99 One Month</a></li>'+
'										<li><a href="#">$49.99 Six Months</a></li>'+
'										<li><a href="#">$99.99 One Year</a></li>'+
'									</ul>'+
'								</div><!-- /button -->'+
'							</div>'+
'						</div>'+
'					</div>'+
'					<!-- /Full 1 -->'
        },
        {
            title: 'Image and Title',
            image: 'template1.gif',
            description: 'One main image with a title and text that surround the image.',
            html: '<h3>' +
                    // Use src=" " so image is not filtered out by the editor as incorrect (src is required).
                    '<img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />' +
                    'Type the title here' +
                    '</h3>' +
                    '<p>' +
                    'Type the text here' +
                    '</p>'
        },
        {
            title: 'Strange Template',
            image: 'template2.gif',
            description: 'A template that defines two columns, each one with a title, and some text.',
            html: '<table cellspacing="0" cellpadding="0" style="width:100%" border="0">' +
                    '<tr>' +
                    '<td style="width:50%">' +
                    '<h3>Title 1</h3>' +
                    '</td>' +
                    '<td></td>' +
                    '<td style="width:50%">' +
                    '<h3>Title 2</h3>' +
                    '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>' +
                    'Text 1' +
                    '</td>' +
                    '<td></td>' +
                    '<td>' +
                    'Text 2' +
                    '</td>' +
                    '</tr>' +
                    '</table>' +
                    '<p>' +
                    'More text goes here.' +
                    '</p>'
        },
        {
            title: 'Text and Table',
            image: 'template3.gif',
            description: 'A title with some text and a table.',
            html: '<div style="width: 80%">' +
                    '<h3>' +
                    'Title goes here' +
                    '</h3>' +
                    '<table style="width:150px;float: right" cellspacing="0" cellpadding="0" border="1">' +
                    '<caption style="border:solid 1px black">' +
                    '<strong>Table title</strong>' +
                    '</caption>' +
                    '<tr>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '<td>&nbsp;</td>' +
                    '</tr>' +
                    '</table>' +
                    '<p>' +
                    'Type the text here' +
                    '</p>' +
                    '</div>'
        }]
});
