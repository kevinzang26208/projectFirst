<?php
header('content-type:text/html;charset="utf-8');
error_reporting(0);

$page = $_GET['page'];
if($page == '1') {
    $data = '111';
} else if ($page == '2') {
    $data = '222';
} else if ($page == '3') {
    $data = '333';
}

echo "{$data}";