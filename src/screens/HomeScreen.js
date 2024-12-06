import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import TeamScore from "../components/TeamScore";
import styles from "../styles/styles";

export const HomeScreen = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  const teamAName = "Tim A";
  const teamBName = "Tim B";

  const increaseScore = (team) => {
    if (team === "A") {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        Alert.alert("Pertandingan Selesai", `${teamAName} menang!`);
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        Alert.alert("Pertandingan Selesai", `${teamBName} menang!`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === "A" && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === "B" && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>

      <TeamScore
        teamName={teamAName}
        score={scoreTeamA}
        onIncrease={() => increaseScore("A")}
        onDecrease={() => decreaseScore("A")}
      />
      <TeamScore
        teamName={teamBName}
        score={scoreTeamB}
        onIncrease={() => increaseScore("B")}
        onDecrease={() => decreaseScore("B")}
      />

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};
