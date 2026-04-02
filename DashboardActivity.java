package com.ruppy.app;

import android.os.Bundle;
import android.os.CountDownTimer;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class DashboardActivity extends AppCompatActivity {

    TextView tokenBalance, usdBalance, countdown;
    Button claimBtn;

    int balance = 0;
    long interval = 3 * 60 * 60 * 1000; // 3 hours

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_dashboard);

        tokenBalance = findViewById(R.id.tokenBalance);
        usdBalance = findViewById(R.id.usdBalance);
        countdown = findViewById(R.id.countdown);
        claimBtn = findViewById(R.id.claimBtn);

        claimBtn.setOnClickListener(v -> {
            balance += 20;
            updateBalance();
            startTimer();
        });

        updateBalance();
    }

    void updateBalance() {
        tokenBalance.setText("RUPPY: " + balance);
        double usd = balance / 1500.0;
        usdBalance.setText("$" + String.format("%.2f", usd));
    }

    void startTimer() {
        claimBtn.setEnabled(false);

        new CountDownTimer(interval, 1000) {
            public void onTick(long millisUntilFinished) {
                long minutes = millisUntilFinished / 60000;
                countdown.setText("Next claim in: " + minutes + " min");
            }

            public void onFinish() {
                claimBtn.setEnabled(true);
                countdown.setText("Claim now!");
            }
        }.start();
    }
}
