from two1.lib.blockchain.exceptions import DataProviderError
from two1.lib.wallet.exceptions import WalletBalanceError
from two1.lib.util.decorators import json_output

from two1.commands.config import Config
from two1.commands.config import TWO1_HOST

conf = Config()

def send(address, satoshis, use_unconfirmed):

    w = conf.wallet
    balance = min(w.confirmed_balance(),
                  w.unconfirmed_balance())
    try:
        txids = w.send_to(address=address,
                          amount=satoshis,
                          use_unconfirmed=use_unconfirmed)
        # For now there is only a single txn created, so assume it's 0
        txid = txids[0]["txid"]
        tx = txids[0]["txn"]
        print("Successfully sent %s satoshis to %s.\n"
                   "txid: %s\n"
                   "tx: %s\n"
                   "To see in the blockchain: "
                   "https://blockexplorer.com/tx/%s\n"
                   % (satoshis, address, txid, tx, txid))
    except ValueError as e:
        # This will trigger if there's a below dust-limit output.
        print(str(e))
    except WalletBalanceError:
        if w.unconfirmed_balance() > satoshis:
            print("Insufficient confirmed balance. However, you can use"
                  "unconfirmed transactions using --use-unconfirmed.")
        else:
            print("Insufficient Blockchain balance of %s satoshis.\n" %
                  (balance))

            txids = []
    except DataProviderError as e:
        if "rejected" in str(e):
            print("Transaction rejected.\n"
                  "You may have to wait for other transactions to confirm.\n")
            txids = []
        else:
            print(str(e))
    return txids
    
