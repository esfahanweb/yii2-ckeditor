<?php
/**
 * Date: 18.01.14
 * Time: 22:16
 */

namespace simacms\ckeditor\widget;

use yii\web\AssetBundle;


class AssetsJQueryAdapter extends AssetBundle{

	public $sourcePath = '@modules/ckeditor/editor/adapters';

    public $js = [
        'jquery.js',
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'simacms\ckeditor\Assets'
    ];
}