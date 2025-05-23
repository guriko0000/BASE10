

## [0] id
## [1] qty
## [2] price
## [3] name
## [4] tax par
## [5] image -> mailformpro/images/${id}.jpg

if(-d $config{'dir.cart'} && $_GET{'callback'}){
	# 環境変数 SCRIPT_NAME を利用
	my $script_name = defined $ENV{'SCRIPT_NAME'} ? $ENV{'SCRIPT_NAME'} : '';
	my ($directory) = $script_name =~ m{(.*/)};
	
	
	$directory .= "cart-images/";
	$cartpath = "$config{'dir.cart'}$_COOKIE{'SES'}.cgi";
	if(-f $cartpath){
		@cart = &_DB($cartpath);
	}
	if($config{'file.item'} ne $null && -f $config{'file.item'}){
		@itemDB = &_DB($config{'file.item'});
	}
	
	## Update Cart
	if($_GET{'item'} ne $null && &_SECSTR($_GET{'item'})){
		## Add Cart
		if($_GET{'qty'} eq $null || $_GET{'qty'} eq 'undefined' || $_GET{'qty'} =~ /[^0-9]/i){
			$_GET{'qty'} = 1;
		}
		if($_GET{'price'} eq 'undefined' || $_GET{'price'} =~ /[^0-9]/i){
			$_GET{'price'} = '';
		}
		if($_GET{'name'} eq 'undefined'){
			$_GET{'name'} = '';
		}
		if($_GET{'tax'} =~ /[^0-9]/i){
			#$_GET{'tax'} = "";
		}
		
		if((grep(/^$_GET{'item'}\t/,@cart)) > 0){
			($id,$qty,$price,$name,$tax) = split(/\t/,(grep(/^$_GET{'item'}\t/,@cart))[0]);
			@cart = grep(!/^$_GET{'item'}\t/,@cart);
			$qty += $_GET{'qty'};
			@item = ($id,$qty,$price,$name,$tax);
			push @cart,join("\t",@item);
		}
		elsif($_GET{'price'} ne $null && $_GET{'name'} ne $null && !(-f $config{'file.item'})){
			@item = (&_SANITIZING($_GET{'item'}),$_GET{'qty'},$_GET{'price'},&_SANITIZING($_GET{'name'}),$_GET{'tax'});
			push @cart,join("\t",@item);
		}
		elsif((grep(/^$_GET{'item'}\t/,@itemDB)) > 0){
			($id,$price,$name,$tax) = split(/\t/,(grep(/^$_GET{'item'}\t/,@itemDB))[0]);
			@item = ($id,$_GET{'qty'},$price,$name,$tax);
			push @cart,join("\t",@item);
		}
	}
	elsif($_GET{'update'} ne $null && (grep(/^$_GET{'update'}\t/,@cart)) > 0){
		($id,$qty,$price,$name,$tax) = split(/\t/,(grep(/^$_GET{'update'}\t/,@cart))[0]);
		@cart = grep(!/^$_GET{'update'}\t/,@cart);
		$qty = $_GET{'qty'};
		@item = ($id,$qty,$price,$name,$tax);
		push @cart,join("\t",@item);
	}
	## Call Back Cart
	my @ucart = ();
	my @json = ();
	@cart = sort { (split(/\t/,$a))[0] cmp (split(/\t/,$b))[0]} @cart;
	for(my $cnt=0;$cnt<@cart;$cnt++){
		($id,$qty,$price,$name,$tax) = split(/\t/,$cart[$cnt]);
		if($qty > 0){
			push @ucart,$cart[$cnt];
			my $json = "\{";
			$json .= "id: '${id}',";
			$json .= "qty: '${qty}',";
			$json .= "price: '${price}',";
			$json .= "name: '${name}',";
			$json .= "tax: '${tax}'";
			if(-f "./cart-images/${id}.jpg"){
				$json .= ", image: '${directory}${id}.jpg'";
			}
			$json .= "\}";
			push @json,$json;
		}
	}
	
	$js = "$_GET{'callback'}(\[" . join(",",@json) . "\])";
	if(@json > 0){
		&_SAVE("$config{'dir.cart'}$_COOKIE{'SES'}.cgi",join("\n",@ucart));
	}
	else {
		unlink "$config{'dir.cart'}$_COOKIE{'SES'}.cgi";
	}
}
1;